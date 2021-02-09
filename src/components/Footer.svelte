<script>
  import OutBoundLink from "./OutBoundLink.svelte";
</script>

<footer class="site-footer hidden-print">
  The materials of this website are licensed under
  <OutBoundLink href="https://creativecommons.org/licenses/by-nc/2.0/"
    ><strong>The Creative Commons</strong></OutBoundLink
  >
</footer>

<style>
  .site-footer {
    font-size: 0.8em;
    text-align: center;
    margin: 6rem auto -2.25rem;
    padding: 1.125rem 0px;
    color: var(--text-secondary);
  }

  :global(.site-footer a) {
    white-space: nowrap;
  }
</style>
