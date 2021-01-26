<script>
  export let url;
  export let title;
  export let isVisible;
  export let onLoad;
</script>

<iframe
  src={url}
  {title}
  frameBorder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  scrolling="no"
  style={{
    display: isVisible ? "block" : "none",
    width: "100%",
    height: "100%",
    marginBottom: 0,
    position: "absolute",
    top: 0,
    left: 0,
  }}
  {onLoad}
/>
