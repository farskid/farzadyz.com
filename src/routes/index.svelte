<script>
  import metadata from "../../content/data/metadata.json";
  import Layout from "../components/Layout.svelte";
  import Bio from "../components/Bio.svelte";
</script>

<Layout
  variant="narrow"
  title={metadata.siteTitle}
  description={metadata.siteDescription}
>
  <Bio />
</Layout>
