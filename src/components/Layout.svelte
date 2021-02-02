<script>
  import SEO from "./Seo.svelte";
  import Footer from "./Footer.svelte";
  import SiteHeader from "./SiteHeader.svelte";

  export let isLimited = true;
  export let title;
  export let description;
  export let keywords;
</script>

<div class={isLimited ? "layout-container-limited" : "layout-container"}>
  <SEO {title} {description} {keywords} />
  <SiteHeader />
  <slot />
  <Footer />
</div>

<style>
  /* Layout */
  .layout-container-limited {
    margin-left: auto;
    margin-right: auto;
    padding: 2.25rem 1.125rem;
    max-width: 36rem;
  }
  .layout-container {
    margin-left: auto;
    margin-right: auto;
    padding: 2.25rem 1.125rem;
    max-width: 75rem;
  }

  @media screen and (max-width: 480px) {
    .layout-container,
    .layout-container-limited {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      /* max-width: 100%; */
    }
    .layout-container-limited {
      max-width: 100%;
    }
  }
</style>
