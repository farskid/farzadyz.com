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
