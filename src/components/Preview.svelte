<script>
  import PreviewIframe from "./PreviewIframe.svelte";
  import classnames from "classnames";

  export let slidesUrl;
  export let videoUrl;

  function getActivePreview({ videoUrl, slidesUrl }) {
    let activePreview;
    const previewUrls = [videoUrl, slidesUrl].filter(Boolean);
    switch (previewUrls.length) {
      case 2:
        activePreview = { url: videoUrl, type: "video" };
        break;
      case 1:
        const url = previewUrls[0];
        activePreview = { url, type: url === videoUrl ? "video" : "slides" };
        break;
      default:
    }
    return (activePreview = activePreviewTypeAndUrl);
  }

  const PreviewStates = {
    Pending: "Pending",
    Loaded: "Loaded",
  };

  const activePreviewTypeAndUrl = getActivePreview({
    videoUrl: props.videoUrl,
    slidesUrl: props.slidesUrl,
  });

  let activePreview = activePreviewTypeAndUrl;
  let previewState = PreviewStates.Pending;
  let previewWrapper;

  const previewOptionsCount = [props.videoUrl, props.slidesUrl].filter(Boolean)
    .length;
</script>

{#if activePreviewTypeAndUrl}
  <!-- Preview links on mobile -->
  <div class="visible-mobile">
    {#if videoUrl}
      <a href={videoUrl} target="_blank" rel="nofollow" class="preview-link">
        Watch <strong>Video</strong> of this talk
      </a>
    {/if}
    {#if slidesUrl}
      <a href={slidesUrl} target="_blank" rel="nofollow" class="preview-link">
        Check out <strong>Slides</strong> of this talk
      </a>
    {/if}
  </div>
  <!-- Preview tabs on desktop and tablet -->
  <div class="preview hidden-mobile">
    <!-- Tabs -->
    <nav class="preview-tabs">
      {#if videoUrl}
        <button
          onClick={() => {
            previewOptionsCount > 1 &&
              (activePreview = {
                type: "video",
                url: videoUrl,
              });
          }}
          class={classnames("preview-tab", {
            active: activePreview.type === "video",
          })}> Video </button>
      {/if}
      {#if slidesUrl}
        <button
          onClick={() => {
            previewOptionsCount > 1 &&
              (activePreview = {
                type: "slides",
                url: slidesUrl,
              });
          }}
          class={classnames("preview-tab", {
            active: activePreview.type === "slides",
          })}> Slides </button>
      {/if}
    </nav>
    <!-- Content -->
    <div class="preview-content">
      <div
        class="hidden-mobile hidden-print"
        style={{
          paddingBottom: "56.25%",
          backgroundColor: "#eee",
          position: "relative",
        }}
        ref={previewWrapper}
      >
        {#if videoUrl}
          <PreviewIframe
            url={videoUrl}
            isVisible={activePreview.type === "video"}
            onLoad={() => {
              previewState = PreviewStates.Loaded;
            }}
          />
        {/if}

        {#if slidesUrl}
          <PreviewIframe
            url={slidesUrl}
            isVisible={activePreview.type === "slides"}
            onLoad={() => {
              previewState = PreviewStates.Loaded;
            }}
          />
        {/if}

        {#if previewState === PreviewStates.Pending}
          <p
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >Loading talk preview</p>
        {/if}
      </div>
    </div>
  </div>
{/if}

<style>
  .preview {
    margin: 0 -1.5rem;
  }
  /* .preview[max-width~="768px"] {
  margin: 0 -0.5rem;
} */

  .preview-link {
    display: block;
    margin: 0.5em auto;
  }

  .preview-tab {
    background-color: #fff;
    border: 1px solid #eee;
    cursor: pointer;
    padding: 0.25em 0.5em;
    text-align: center;
    width: 75px;
    transition: 250ms;
    will-change: font-weight;
  }
  .preview-tab:focus,
  .preview-tab:active,
  .preview-tab:focus:active {
    outline-color: #fff;
  }
  .preview-tab.active {
    background-color: #eee;
    background-color: #eee;
    font-weight: 700;
  }
</style>
