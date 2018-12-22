import React from "react";

const HEAP_TRACK_IDS = {
  development: "1826126532",
  production: "4121499896"
};

const trackId = HEAP_TRACK_IDS[process.env.NODE_ENV];

export const Document = ({
  Html,
  Head,
  Body,
  children,
  siteData,
  renderMeta
}) => (
  <Html lang="en-US">
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <style
        dangerouslySetInnerHTML={{
          __html: `pre {
            color: #ccc;
            background: rgb(40, 41, 54);
            text-shadow: none;
            font-family: IBM Plex Mono, Consolas, Monaco, "Andale Mono", "Ubuntu Mono",
              monospace;
            text-align: left;
            white-space: pre;
            word-spacing: normal;
            word-break: normal;
            word-wrap: normal;
            line-height: 1.5;

            -moz-tab-size: 4;
            -o-tab-size: 4;
            tab-size: 4;

            -webkit-hyphens: none;
            -moz-hyphens: none;
            -ms-hyphens: none;
            hyphens: none;

            display: block;
            padding: 1em;
          }
          .hljs {
            display: block;
            overflow-x: auto;
            padding: 0.5em;
            background: #282a36;
          }

          .hljs-built_in,
          .hljs-selector-tag,
          .hljs-section,
          .hljs-link {
            color: #8be9fd;
          }

          .hljs-keyword {
            color: #ff79c6;
          }

          .hljs,
          .hljs-subst {
            color: #f8f8f2;
          }

          .hljs-title {
            color: #50fa7b;
          }

          .hljs-string,
          .hljs-meta,
          .hljs-name,
          .hljs-type,
          .hljs-attr,
          .hljs-symbol,
          .hljs-bullet,
          .hljs-addition,
          .hljs-variable,
          .hljs-template-tag,
          .hljs-template-variable {
            color: #f1fa8c;
          }

          .hljs-comment,
          .hljs-quote,
          .hljs-deletion {
            color: #6272a4;
          }

          .hljs-keyword,
          .hljs-selector-tag,
          .hljs-literal,
          .hljs-title,
          .hljs-section,
          .hljs-doctag,
          .hljs-type,
          .hljs-name,
          .hljs-strong {
            font-weight: bold;
          }

          .hljs-literal,
          .hljs-number {
            color: #bd93f9;
          }

          .hljs-emphasis {
            font-style: italic;
          }
          `
        }}
      />
    </Head>
    <Body>
      <noscript>
        <h1>I'm afraid I can not service without Javascript</h1>
      </noscript>
      {children}
      <script
        defer
        dangerouslySetInnerHTML={{
          __html: `window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid = e,window.heap.config=t=t||{};var r=t.forceSSL||"https:"===document.location.protocol,a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src=(r?"https:":"http:")+"//cdn.heapanalytics.com/js/heap-"+e+".js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(a,n);for(var o=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments, 0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],c=0;c<p.length; c++)heap[p[c]]=o(p[c])};heap.load(${trackId});`
        }}
      />
    </Body>
  </Html>
);
