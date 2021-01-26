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
  import SEO from "../../components/Seo.svelte";
  import "prismjs/themes/prism-okaidia.css";
  import Date from "../../components/Date.svelte";

  export let post;
  export let posts;

  $: prevPost = posts.find((p) => p.slug === post?.prevSlug);
  $: nextPost = posts.find((p) => p.slug === post?.nextSlug);

  function createPaginatedUrl(url) {
    return `/blog/${url}`;
  }
</script>

<Layout title={post.title} description={post.description}>
  <SEO
    title={post.title}
    description={post.description}
    keywords={post.keywords}
  />
  <BlogShareBar blogPostData={post} />
  <h1>{post.title}</h1>
  <p class="post-date"><small><Date dateString={post.publishedAt} /></small></p>
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
  /* Layout */
  @media screen and (min-width: 768px) {
    .post :global(pre, iframe) {
      margin-left: -6rem !important;
      margin-right: -6rem !important;
      width: calc(100% + 12rem) !important;
    }
  }

  .post :global(pre, code, iframe) {
    border-radius: 0.3em;
  }

  /* Code */
  .post :global(pre, code) {
    font-family: "IBM Plex Mono", "Consolas", "Monaco", "Andale Mono",
      "Ubuntu Mono", monospace;
    background: var(--bg-dark);
    margin: 0.5em 0;
    padding: 1em;
    overflow: auto;
    border-radius: 0.3em;
    width: 100%;
    font-size: 1rem;
  }

  .post :global(code[class*="language-"]) {
    padding: 0;
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
    color: #272822;
    margin: 0 0.25rem;
    white-space: nowrap;
  }

  /* Content */
  .post-date {
    margin-top: -1.5rem;
  }
  .post :global(h2, h3) {
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

  .post :global(a) {
    color: #000;
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
</style>
