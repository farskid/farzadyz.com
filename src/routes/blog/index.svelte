<script context="module">
  export function preload() {
    return this.fetch(`blog.json`)
      .then((r) => r.json())
      .then((posts) => {
        return { posts };
      });
  }
</script>

<script>
  import metadata from "../../../content/data/metadata.json";
  import Date from "../../components/Date.svelte";
  import Layout from "../../components/Layout.svelte";

  export let posts;
</script>

<Layout title="Blog | {metadata.siteTitle}">
  <ul class="posts-list">
    {#each posts as post}
      <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
      <article style="margin-bottom: 3rem;">
        <h2 style="margin-bottom: 0.75rem;">
          <a
            rel="prefetch"
            href="blog/{post.slug}"
            style="text-decoration: none;">{post.title}</a
          >
        </h2>
        <p class="post-date"><Date dateString={post.publishedAt} /></p>
        <p>
          {@html post.excerpt}...
          <a class="read-more-link" href="blog/{post.slug}"
            ><em>Read more</em></a
          >
        </p>
      </article>
    {/each}
  </ul>
</Layout>

<style>
  .posts-list {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }

  .post-date {
    font-family: var(--font-heading);
  }

  .read-more-link {
    font-weight: 700;
    display: block;
    margin-top: 0.5rem;
  }
</style>
