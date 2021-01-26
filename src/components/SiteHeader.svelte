<script>
  import metadata from "../../content/data/metadata.json";
  import Navbar from "./Navbar.svelte";
</script>

<header class="site-header">
  <figure class="site-image" />
  <h1>{metadata.fullName}</h1>
  <Navbar />
  <a
    rel="noopener noreferrer"
    target="_blank"
    href="https://twitter.com/intent/follow?original_referer=http%3A%2F%2Flocalhost%3A8000%2F&amp;amplref_src=twsrc%5Etfw&amp;screen_name=farzad_yz&amp;tw_p=followbutton"
    class="hidden-print site-header-button"
    style="color: rgb(255, 255, 255); padding: 6px 12px; border-radius: 3px; text-decoration: none; font-size: 0.75rem; white-space: nowrap; text-transform: uppercase; background-color: rgb(27, 149, 224);"
    >Follow {metadata.social.twitterHandle} on Twitter</a
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
  .site-header-button {
    margin: 5px;
    display: inline-block;
    max-width: 250px;
  }

  .site-header {
    text-align: center;
    margin-bottom: 6rem;
  }

  @media screen and (max-width: 480px) {
    .site-header-button {
      display: block;
      margin: 5px auto;
    }

    .site-header {
      margin-bottom: 3rem;
    }
  }
</style>
