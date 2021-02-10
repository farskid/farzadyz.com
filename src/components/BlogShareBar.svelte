<script>
  import metadata from "../../content/data/metadata.json";
  import OutboundLink from "./OutBoundLink.svelte";

  export let blogPostData = {
    slug: "",
    title: "",
    keywords: "",
    editLink,
  };

  $: hashtags = blogPostData.keywords.split(" ").join(",");
  $: shareUrl = (function () {
    {
      const u = new URL("https://twitter.com/share");
      u.searchParams.append(
        "text",
        `Check out: ${blogPostData.title} by ${metadata.social.twitterHandle}`
      );
      u.searchParams.append(
        "url",
        `https://farzadyz.com/blog/${blogPostData.slug}`
      );
      u.searchParams.append("hashtags", hashtags);
      return u.toString();
    }
  })();
</script>

<nav>
  <a href="/blog">Check out all posts</a>

  <ul class="share-list list-none list-inline spacing-h">
    <li>
      <OutboundLink href={blogPostData.editLink}>Edit on Github</OutboundLink>
    </li>
    <li>
      <OutboundLink href={shareUrl} style="line-height: 50px;">
        <img
          width={25}
          height={25}
          style="width: 25px; height: 25px; margin: 0; display: block;"
          src="/twitter.svg"
          alt="share on twitter"
        />
      </OutboundLink>
    </li>
  </ul>
</nav>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    height: 50px;
    align-items: center;
  }

  .share-list {
    padding: 0;
  }
</style>
