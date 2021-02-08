<script context="module">
  export function preload() {
    return this.fetch(`appearances.json`)
      .then((r) => r.json())
      .then((talks) => {
        return { talks };
      });
  }
</script>

<script>
  import metadata from "../../../content/data/metadata.json";
  import Appearances from "../../components/Appearances.svelte";
  import Layout from "../../components/Layout.svelte";
  import OutBoundLink from "../../components/OutBoundLink.svelte";

  export let talks;
</script>

<Layout
  title="Appearances | {metadata.siteTitle}"
  description="List of conference talks, talks at meetups and the podcasts I've been to | {metadata.siteDescription}"
>
  <p>
    Want me to speak at your event? <OutBoundLink
      href="mailto:farskid@gmail.com?subject={encodeURIComponent(
        'We want to hire you to speak at our event'
      )}">Get in touch!</OutBoundLink
    >
  </p>
  <hr />
  <Appearances {talks} />
</Layout>
