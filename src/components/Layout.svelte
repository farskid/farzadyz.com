<script>
  import SEO from "./Seo.svelte";
  import Footer from "./Footer.svelte";
  import Navbar from "./Navbar.svelte";
  import SiteHeader from "./SiteHeader.svelte";

  export let isLimited = true;
  export let title;
  export let description;
</script>

<div class={isLimited ? "layout-container-limited" : "layout-container"}>
  <slot name="custom-seo">
    <SEO
      {title}
      {description}
      keywords={[
        `farzad yz`,
        `javascript`,
        `typescript`,
        `react`,
        `react native`,
        `nodejs`,
        `restful services`,
        `serverless`,
        `redux`,
        `graphql`,
        `reasonml`,
        `elm`,
        `golang`,
        `automation`,
        `architecture`,
        `dx`,
        `tooling`,
        `state management`,
        `react native`,
        `statecharts`,
        `state machines`,
        `aws`,
        `cloud`,
        `api development`,
        `express`,
        `technical talks`,
        `conference talks`,
        `developer advocacy`,
        `dev rel`,
      ]}
    />
  </slot>
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

  @media screen and (max-width: 30rem) {
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
