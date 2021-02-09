<script context="module">
  import posts from "./_posts";
  export async function preload({ params }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`blog/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data, posts };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import BlogShareBar from "../../components/BlogShareBar.svelte";
  import Layout from "../../components/Layout.svelte";
  import Date from "../../components/Date.svelte";
  import calculateReadingTime from "reading-time";

  export let post;
  export let posts;

  const readingTime = calculateReadingTime(post.html);

  $: prevPost = posts.find((p) => p.slug === post?.prevSlug);
  $: nextPost = posts.find((p) => p.slug === post?.nextSlug);

  function createPaginatedUrl(url) {
    return `/blog/${url}`;
  }
</script>

<Layout title={post.title} description={post.excerpt} keywords={post.keywords}>
  <BlogShareBar blogPostData={post} />
  <h1>{post.title}</h1>
  <p class="post-date">
    <small>
      <strong><Date dateString={post.publishedAt} /></strong>
      <span style="margin-left:1rem">{readingTime.text}</span>
    </small>
  </p>
  <hr />
  <div class="post">
    {@html post.html}
  </div>
  <hr />
  <ul
    class="paginated-posts"
    class:single-child={[post.prevSlug, post.nextSlug].filter(Boolean).length <
      2}
  >
    {#if post.prevSlug}
      <li>
        <h3>← Previous post</h3>
        <a href={createPaginatedUrl(post.prevSlug)} rel="prev">
          {prevPost.title}
        </a>
      </li>
    {/if}
    {#if post.nextSlug}
      <li style="text-align: right">
        <h3>Next post →</h3>
        <a href={createPaginatedUrl(post.nextSlug)} rel="next">
          {nextPost.title}
        </a>
      </li>
    {/if}
  </ul>
</Layout>

<style>
  .post-date {
    font-family: var(--font-heading);
  }

  .post :global(pre),
  .post :global(iframe),
  .post :global(code) {
    border-radius: 0.3em;
  }

  /* Code */
  .post :global(pre),
  .post :global(code) {
    background: var(--dark);
    margin: 0.5em 0;
    padding: 1em;
    overflow: auto;
    width: 100%;
    font-size: 1rem;
  }

  .post :global(code[class*="language-"]) {
    padding: 0;
  }

  .post :global(code[class*="language-"]),
  .post :global(pre[class*="language-"]) {
    color: var(--light);
  }

  .post :global(code:not([class*="language-"])) {
    font-weight: normal;
    font-kerning: normal;
    font-feature-settings: "kern", "liga", "clig", "calt";
    box-sizing: inherit;
    font-size: 1em;
    text-align: left;
    word-spacing: normal;
    word-break: normal;
    line-height: 1.5;
    tab-size: 4;
    hyphens: none;
    border-radius: 0.3em;
    padding: 3px 6px;
    background-color: var(--yellow);
    color: var(--text-primary);
    margin: 0 0.25rem;
    white-space: normal;
  }

  /* Content */
  .post :global(h2),
  .post :global(h3) {
    margin-top: 3rem;
  }

  .post :global(blockquote) {
    margin-left: 0;
    border: 1px solid var(--blue);
    border-left-width: 0.5rem;
    padding: 0.5rem;
    padding-left: 1.5rem;
    font-style: italic;
  }
  @media screen and (max-width: 48rem) {
    .post :global(blockquote) {
      width: 100%;
    }
  }

  .post :global(img) {
    max-width: 100%;
  }

  .post :global(a) {
    word-break: break-all;
  }

  /* Pagination */
  .paginated-posts {
    list-style: none;
    margin: 0 auto;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0 1rem;
  }
  .paginated-posts.single-child {
    display: block;
  }

  @media screen and (max-width: 48rem) {
    .post :global(iframe),
    .post :global(img),
    .post :global(pre) {
      width: calc(100% + 1rem);
      margin-left: -0.5rem;
      border-radius: 0;
      max-width: none;
    }
  }
  @media screen and (min-width: 48rem) {
    .post :global(iframe),
    .post :global(img),
    .post :global(pre) {
      margin-left: -6rem;
      margin-right: -6rem;
      width: calc(100% + 12rem);
      max-width: none;
    }
  }

  /* Syntax Highlighting */
  :global(.token.comment, .token.prolog, .token.doctype, .token.cdata) {
    color: #8292a2;
  }

  :global(.token.punctuation) {
    color: #f8f8f2;
  }

  :global(.token.namespace) {
    opacity: 0.7;
  }

  :global(.token.property, .token.tag, .token.constant, .token.symbol, .token.deleted) {
    color: #f92672;
  }

  :global(.token.boolean, .token.number) {
    color: #ae81ff;
  }

  :global(.token.selector, .token.attr-name, .token.string, .token.char, .token.builtin, .token.inserted) {
    color: #a6e22e;
  }

  :global(.token.operator, .token.entity, .token.url, .language-css
      .token.string, .style .token.string, .token.variable) {
    color: #f8f8f2;
  }

  :global(.token.atrule, .token.attr-value, .token.function, .token.class-name) {
    color: #e6db74;
  }

  :global(.token.keyword) {
    color: #66d9ef;
  }

  :global(.token.regex, .token.important) {
    color: #fd971f;
  }

  :global(.token.important, .token.bold) {
    font-weight: bold;
  }
  :global(.token.italic) {
    font-style: italic;
  }

  :global(.token.entity) {
    cursor: help;
  }
</style>
