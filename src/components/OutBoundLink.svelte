<script>
  import splitbee from "@splitbee/web";

  export let href;

  let props;
  $: ({ href, rel, ...props } = $$props);
  $: {
    if (rel) {
      console.error("OutBoundLink MUST NOT have a custom rel", href);
    }
  }
</script>

{#if !href}
  <h1 style="color:red">This link does not have an <em>href</em> attribute</h1>
{/if}

{#if href}
  <a
    on:click={() => {
      splitbee.track("external_link_click", { href });
    }}
    target="_blank"
    rel="nofollow noreferrer noopener"
    {href}
    {...props}
  >
    <slot />
  </a>
{/if}
