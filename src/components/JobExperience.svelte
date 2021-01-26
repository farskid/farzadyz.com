<script>
  import { rhythm } from "../utils/typography";

  export let position;
  export let date;
  export let responsibilities = [];
</script>

<section class="job-experience" style="--rhythm: {rhythm(1)}">
  <h3>{position}</h3>
  <h6>{date}</h6>
  {#if responsibilities.length}
    {#each responsibilities as r}
      <p>{r}</p>
    {/each}
  {:else}
    <slot />
  {/if}
</section>
