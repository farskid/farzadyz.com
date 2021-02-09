<script>
  import metadata from "../../content/data/metadata.json";
  import Layout from "../components/Layout.svelte";
  import Bio from "../components/Bio.svelte";
</script>

<Layout title={metadata.siteTitle} description={metadata.siteDescription}>
  <Bio />
</Layout>
