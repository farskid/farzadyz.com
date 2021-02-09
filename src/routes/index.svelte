<script>
  import metadata from "../../content/data/metadata.json";
  import Layout from "../components/Layout.svelte";
  import Bio from "../components/Bio.svelte";

  import splitbee from "@splitbee/web";
  import { onMount } from "svelte";

  onMount(() => {
    splitbee.init();
  });
</script>

<Layout title={metadata.siteTitle} description={metadata.siteDescription}>
  <Bio />
</Layout>
