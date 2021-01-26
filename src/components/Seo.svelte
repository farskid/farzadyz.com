<script>
  import metadata from "../../content/data/metadata.json";

  export let description = metadata.siteDescription;
  export let keywords = metadata.siteKeywords;
  export let title = metadata.siteTitle;
</script>

<svelte:head>
  <title>{title}</title>
  <meta charset="utf-8" />
  <meta http-equiv="x-ua-compatible" content="ie=edge" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  <meta name="theme-color" content="#663399" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:creator" content={metadata.fullName} />
  <meta name="description" content={description} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="keywords" content={keywords} />
</svelte:head>
