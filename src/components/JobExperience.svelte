<script>
  import { rhythm } from "../utils/typography";

  export let position;
  export let date;
  export let responsibilities = [];
</script>

<section class="job-experience" style="--rhythm: {rhythm(1)}">
  <h3>{position}</h3>
  <h4>{date}</h4>
  {#if responsibilities.length}
    {#each responsibilities as r}
      <p>{r}</p>
    {/each}
  {:else}
    <slot />
  {/if}
</section>

<style>
  h4 {
    font-size: 0.75em;
  }
</style>
