<script>
  import { rhythm } from "../utils/typography";

  export let title;
  export let textArray = [];
</script>

<section style="margin-top: {rhythm(2)}; margin-bottom: {rhythm(2)}">
  <h2>{title}</h2>
  {#each textArray as t}
    <p>{t}</p>
  {/each}
  <slot />
</section>
