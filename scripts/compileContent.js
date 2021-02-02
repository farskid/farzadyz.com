const fs = require("fs-extra");
const path = require("path");
const { Remarkable } = require("remarkable");
const frontmatter = require("@github-docs/frontmatter");
const slugify = require("slugify");
const extlink = require("remarkable-extlink");
const prettier = require("prettier");
const prettierParser = require("prettier/parser-markdown");
// const hljs = require("highlight.js");
const Prism = require("prismjs");
require("prismjs/components/prism-jsx");
const lazyIframe = require("./iframe.js");
const lazyImage = require("./image.js");

const mdParser = new Remarkable({
  langPrefix: "language-",
  html: true,
  highlight(str, lang) {
    return Prism.highlight(str, Prism.languages[lang]);
  },
  // highlight: function (str, lang) {
  //   if (lang && hljs.getLanguage(lang)) {
  //     try {
  //       return hljs.highlight(lang, str).value;
  //     } catch (err) {}
  //   }

  //   try {
  //     return hljs.highlightAuto(str).value;
  //   } catch (err) {}

  //   return ""; // use external default escaping
  // },
}).use(extlink, {
  host: "farzadyz.com",
});
const blogPostFrontmatterSchema = {
  properties: {
    title: {
      type: "string",
      required: true,
    },
    publishedAt: {
      required: true,
    },
    keywords: {
      type: ["string", "array"],
      required: true,
    },
  },
};

function formatWithPrettier(text) {
  return prettier.format(text, {
    parser: "markdown",
  });
}

function generatePostExcerpt(html) {
  return new RegExp(/<p>(.*?)<\/p>/).exec(html)[1];
}

function sortPostsByPublishedDateDesc(posts) {
  return posts.sort((a, b) =>
    new Date(a.publishedAt).getTime() < new Date(b.publishedAt).getTime()
      ? 1
      : -1
  );
}

// Note: blog posts are read and formatted by frontmatter automatically
async function prepareBlogPosts() {
  const blogDir = "content/blog";
  const posts = await fs.promises.readdir(path.join(blogDir));

  const blogPosts = [];
  for (let post of posts) {
    let md = await (
      await fs.promises.readFile(path.join(blogDir, post))
    ).toString();
    md = formatWithPrettier(md);
    const fmt = frontmatter(md, {
      schema: blogPostFrontmatterSchema,
      validateKeyNames: false,
      validateKeyOrder: false,
    });
    const mdWithoutFrontmatter = md.replace(/^---[\s\S]*---/, "");
    const html = mdParser.render(mdWithoutFrontmatter);
    if (!fmt.errors.length) {
      const postData = {
        ...fmt.data,
        slug: slugify(fmt.data.title),
        // md,
        excerpt: generatePostExcerpt(html),
        html: lazyIframe(lazyImage(html)),
      };
      blogPosts.push(postData);
    } else {
      console.log(fmt.errors);
      console.error(`post ${post} has invalid frontmatter`);
    }
  }

  return sortPostsByPublishedDateDesc(
    blogPosts.map((post, index) => {
      return {
        ...post,
        keywords: post.keywords.split(" ").join(),
        nextSlug:
          blogPosts[index + 1]?.title && slugify(blogPosts[index + 1].title),
        prevSlug:
          blogPosts[index - 1]?.title && slugify(blogPosts[index - 1].title),
      };
    })
  );
}

// Write posts in an array in blog/_posts.js for Sapper
async function persisBlogPosts(blogPosts) {
  await fs.promises.writeFile(
    "src/routes/blog/_posts.js",
    `
        const posts = ${JSON.stringify(blogPosts)};
        export default posts;
    `
  );
}

(async function compile() {
  try {
    console.log("preparing blog posts");
    const posts = await prepareBlogPosts();
    console.log("writing to blog/_posts.js");
    await persisBlogPosts(posts);
  } catch (err) {
    console.error(err);
  }
})();
