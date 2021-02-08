<script>
  export let position;
  export let date;
  export let company;
</script>

<section class="job-experience">
  <h3>{position} at {company}</h3>
  <p class="job-date"><strong>{date}</strong></p>
  <slot />
</section>

<style>
  .job-date {
    font-family: var(--font-heading);
    font-size: 0.75rem;
  }
</style>
