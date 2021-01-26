<script>
  import metadata from "../../content/data/metadata.json";
  import { rhythm } from "../utils/typography";
  import OutboundLink from "./OutBoundLink.svelte";

  export let blogPostData = {
    slug: "",
    title: "",
    keywords: "",
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

  $: console.log(shareUrl);
</script>

<nav style="margin-bottom:{rhythm(1)}">
  <a href="/blog">Check out all posts</a>
  <OutboundLink href={shareUrl} style="line-height: 50px;">
    <img
      width={25}
      height={25}
      style="width: 25px; height: 25px; margin: 0; display: block;"
      src="/twitter.svg"
      alt="share on twitter"
    />
  </OutboundLink>
</nav>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    height: 50px;
    align-items: center;
  }
</style>
