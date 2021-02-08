<script>
  export let title;
  export let textArray = [];
</script>

<section>
  <h2>{title}</h2>
  {#each textArray as t}
    <p>{t}</p>
  {/each}
  <slot />
</section>

<style>
  h2 {
    text-transform: capitalize;
  }
</style>
