import { reloadRoutes } from "react-static/node";
import jdown from "jdown";
import chokidar from "chokidar";
import packageJson from "./package.json";
import { Document } from "./src/Document";

const { version } = packageJson;
let posts;
let randomPost;

function randomPickFromArray(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

// TODO: put this in env variable
const siteRootEnum = {
  development: "http://localhost:3000",
  staging: "http://localhost:3000",
  production: "https://farzadyz.com"
};

const trackIdEnum = {
  development: "1826126532",
  production: "4121499896"
};

// Watch posts for changes
chokidar.watch("posts").on("all", () => {
  console.log(`change in posts, reloading routes...`);
  reloadRoutes();
});

export default {
  plugins: [["analytics", { trackId: trackIdEnum[process.env.NODE_ENV] }]],
  getSiteData() {
    return {
      version,
      avatar: `https://s.gravatar.com/avatar/25710181a99650b72a5f43841afcda9e?s=1024`,
      siteRoot: siteRootEnum[process.env.NODE_ENV]
    };
  },
  getRoutes: async () => {
    const parsedPosts = await jdown("posts", {
      parseMd: true
    });
    posts = Object.values(parsedPosts);
    // sort posts based on published date
    posts.sort((a, b) =>
      new Date(a.publishedAt).getTime() > new Date(b.publishedAt).getTime()
        ? -1
        : 1
    );
    randomPost = randomPickFromArray(posts);
    return [
      {
        path: "/",
        component: "src/pages/HomePage",
        getData: async () => ({ welcomeText: "Howdy! I'm Farzad." })
      },
      // {
      //   path: "/cv",
      //   component: "src/pages/AboutPage",
      //   getData: async () => ({ title: "About Page of website" })
      // },
      // {
      //   path: "/appearances",
      //   component: "src/pages/AppearancePage"
      // },
      {
        path: "/blog",
        component: "src/pages/BlogPage",
        getData: () => ({ posts }),
        children: posts.map(p => ({
          path: `${p.slug}`,
          component: "src/pages/PostPage",
          getData: async () => ({
            post: p,
            url: `${siteRootEnum[process.env.NODE_ENV]}/blog/${p.slug}`
          })
        }))
      },
      {
        path: "404",
        component: "src/pages/NotFound",
        getData: () => ({ randomPost })
      }
    ];
  }
};
