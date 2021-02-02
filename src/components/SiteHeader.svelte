<script>
  import metadata from "../../content/data/metadata.json";
  import Navbar from "./Navbar.svelte";
  import OutBoundLink from "./OutBoundLink.svelte";
</script>

<header class="site-header">
  <figure class="site-image" />
  <h1>{metadata.fullName}</h1>
  <Navbar />
  <OutBoundLink
    href="https://twitter.com/intent/follow?original_referer=http%3A%2F%2Flocalhost%3A8000%2F&amp;amplref_src=twsrc%5Etfw&amp;screen_name=farzad_yz&amp;tw_p=followbutton"
    class="hidden-print site-header-button"
  >Follow {metadata.social.twitterHandle} on Twitter</OutBoundLink
  >
</header>

<style>
  .site-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-image: url("/feri.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    margin-right: auto;
    margin-left: auto;
  }
  :global(.site-header-button) {
    margin: 5px;
    display: inline-block;
    max-width: 250px;
    padding: 0.5rem 0.75rem;
    border-radius: 0.25rem;
    text-decoration: none;
    font-size: 0.75rem;
    white-space: nowrap;
    text-transform: uppercase;
    background-color: var(--bg-dark);
    color: #fff;
  }

  .site-header {
    text-align: center;
    margin-bottom: 6rem;
  }

  @media screen and (max-width: 480px) {
    :global(.site-header-button) {
      display: block;
      margin: 5px auto;
    }

    .site-header {
      margin-bottom: 3rem;
    }
  }
</style>
