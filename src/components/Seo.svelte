<script>
  // Full list of icons and metas: https://stackoverflow.com/questions/48956465/favicon-standard-2021-svg-ico-png-and-dimensions

  import { prop_dev } from "svelte/internal";
  import metadata from "../../content/data/metadata.json";

  export let description = metadata.siteDescription;
  export let keywords = metadata.siteKeywords;
  export let title = metadata.siteTitle;
  export let url = metadata.siteURL;

  const seeAlsoLinks = [
    metadata.social.github,
    metadata.social.twitter,
    metadata.social.linkedin,
    `${metadata.siteURL}/blog`,
    `${metadata.siteURL}/talks`,
  ];
</script>

<svelte:head>
  <title>{title}</title>
  <meta charset="utf-8" />
  <meta http-equiv="x-ua-compatible" content="ie=edge" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />

  <meta name="description" content={description} />

  <meta name="keywords" content={keywords} />

  <!-- OG -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={url} />

  <meta property="og:image" content="/icons/android-chrome-512x512.png" />
  <meta property="og:image:type" content="image/png" />
  <meta property="og:image:width" content="512" />
  <meta property="og:image:height" content="512" />
  <meta property="og:site_name" content={metadata.siteTitle} />
  <meta property="og:article:author" content={metadata.fullName} />
  <meta property="og:article:tag" content={keywords} />
  {#each seeAlsoLinks as link}
    <meta property="og:see_also" content={link} />
  {/each}

  <!-- TW -->
  <meta name="twitter:card" content="summary" />
  <meta
    name="twitter:creator"
    content={[metadata.fullName, metadata.social.twitterHandle].join("|")}
  />
  <meta name="twitter:site" content={metadata.social.twitterHandle} />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:url" content={url} />
  <meta name="twitter:image:src" content="/icons/android-chrome-512x512.png" />
</svelte:head>
