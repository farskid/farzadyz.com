// @ts-check
import React from "react";
import classnames from "classnames";
import "./Preview.css";

export function getActivePreview({ videoUrl, slidesUrl }) {
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
  return activePreview;
}

const PreviewStates = {
  Pending: "Pending",
  Loaded: "Loaded"
};

function PreviewIframe({ url, isVisible, onLoad }) {
  return (
    <iframe
      src={url}
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
        left: 0
      }}
      onLoad={onLoad}
    />
  );
}

export function Preview(props) {
  const { videoUrl, slidesUrl } = props;
  const activePreviewTypeAndUrl = getActivePreview({
    videoUrl: props.videoUrl,
    slidesUrl: props.slidesUrl
  });
  const [activePreview, setActivePreview] = React.useState(
    activePreviewTypeAndUrl
  );
  const [previewState, setPreviewState] = React.useState(PreviewStates.Pending);
  const previewWrapper = React.useRef();

  const previewOptionsCount = [props.videoUrl, props.slidesUrl].filter(Boolean)
    .length;

  if (!activePreviewTypeAndUrl) {
    return null;
  }

  return (
    <>
      {/* Preview links on mobile */}
      <div className="visible-mobile">
        {videoUrl && (
          <a
            href={videoUrl}
            target="_blank"
            rel="nofollow"
            className="preview-link"
          >
            Watch <strong>Video</strong> of this talk
          </a>
        )}
        {slidesUrl && (
          <a
            href={slidesUrl}
            target="_blank"
            rel="nofollow"
            className="preview-link"
          >
            Check out <strong>Slides</strong> of this talk
          </a>
        )}
      </div>
      {/* Preview tabs on desktop and tablet */}
      <div className="preview hidden-mobile">
        {/* Tabs */}
        <nav className="preview-tabs">
          {videoUrl && (
            <button
              onClick={() => {
                previewOptionsCount > 1 &&
                  setActivePreview({
                    type: "video",
                    url: props.videoUrl
                  });
              }}
              className={classnames("preview-tab", {
                active: activePreview.type === "video"
              })}
            >
              Video
            </button>
          )}
          {slidesUrl && (
            <button
              onClick={() => {
                previewOptionsCount > 1 &&
                  setActivePreview({
                    type: "slides",
                    url: props.slidesUrl
                  });
              }}
              className={classnames("preview-tab", {
                active: activePreview.type === "slides"
              })}
            >
              Slides
            </button>
          )}
        </nav>
        {/* Content */}
        <div className="preview-content">
          <div
            className="hidden-mobile hidden-print"
            style={{
              paddingBottom: "56.25%",
              backgroundColor: "#eee",
              position: "relative"
            }}
            ref={previewWrapper}
          >
            {videoUrl && (
              <PreviewIframe
                url={videoUrl}
                isVisible={activePreview.type === "video"}
                onLoad={() => {
                  setPreviewState(PreviewStates.Loaded);
                }}
              />
            )}
            {slidesUrl && (
              <PreviewIframe
                url={slidesUrl}
                isVisible={activePreview.type === "slides"}
                onLoad={() => {
                  setPreviewState(PreviewStates.Loaded);
                }}
              />
            )}
            {previewState === PreviewStates.Pending ? (
              <p
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)"
                }}
              >
                Loading talk preview
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
