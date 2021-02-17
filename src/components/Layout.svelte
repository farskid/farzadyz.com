<script>
  import SEO from "./Seo.svelte";
  import Footer from "./Footer.svelte";
  import SiteHeader from "./SiteHeader.svelte";

  export let variant = "normal";
  export let title;
  export let description;
  export let keywords = [];

  const variantToClassname = {
    normal: "",
    wide: "layout-container-wide",
    narrow: "layout-container-narrow",
  };
</script>

<div class="layout-container {variantToClassname[variant]}">
  <SEO {title} {description} {keywords} />
  <SiteHeader />
  <slot />
  <Footer />
</div>

<style>
  /* Layout */
  .layout-container {
    margin-left: auto;
    margin-right: auto;
    padding: 2.25rem 1.125rem;
  }
  .layout-container:not(.layout-container-narrow):not(.layout-container-wide) {
    max-width: 48rem;
  }
  :global(.layout-container-narrow) {
    max-width: 36rem;
  }
  :global(.layout-container-wide) {
    max-width: 75rem;
  }

  @media screen and (max-width: 36rem) {
    .layout-container {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      max-width: 100%;
    }
  }
</style>
