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
  import { onMount } from "svelte";
  import Date from "../../components/Date.svelte";
  import Layout from "../../components/Layout.svelte";

  export let posts;

  let userLang;

  onMount(() => {
    // get user's specified language from browser
    const getLanguage = () =>
      navigator.userLanguage ||
      (navigator.languages &&
        navigator.languages.length &&
        navigator.languages[0]) ||
      navigator.language ||
      navigator.browserLanguage ||
      navigator.systemLanguage ||
      "en";

    userLang = getLanguage();
  });

  $: dateFormatter = (dateString) =>
    userLang
      ? !!Intl
        ? new Intl.DateTimeFormat(userLang, {
            year: "numeric",
            month: "short",
          }).format(new Date(dateString))
        : dateString
      : dateString;
</script>

<Layout
  title="Blog | Farzad Yousefzadeh"
  description="Technical Blog by Farzad Yousefzadeh"
>
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
        <p
          style="margin-bottom: 0.75rem; display: block; color: rgb(119, 119, 119);"
        ><Date dateString={post.publishedAt} /></p>
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

  .read-more-link {
    font-weight: 700;
    display: block;
    margin-top: 0.5rem;
  }
</style>
