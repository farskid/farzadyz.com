---
title: Cross-Domain Iframe-parent communication
slug: cross-domain-iframe-parent-communication
publishedAt: 28 Dec 2016
keywords: Javascript HTML iframe messaging
---

There are many cases iframe would be good solution to use. Although they are kind of dead to HTML and not a lot of developers use it, It could come up to you as a solution to a complicated problem some day.

Knowing a way to communicate through iframe to parent is such a valuable and time saver. Maybe iframe could tell it’s parents when it’s content is ready or engage user interactions inside iframe with the parent to react properly.

Some days ago at my company we had a Wordpress website that loaded an iframe for choosing a plan to buy virtual machines as shown below.

![An iframe included inside Wordpress to choose VM plans](https://cdn-images-1.medium.com/max/1600/1*Npna_TbF8ChgAroSVkyu_Q.png)

I was assigned a task to do something challenging on this element. The company intended to open a URL on click of the orange button, BUT because the button was inside the iframe, that couldn’t be managed easily.

First thing I tried to was to use postMessage to send a message from iframe to it’s parent. I came up with this code:

```html
<iframe src="Path/To/Html"><button id="my-btn">Start</button></iframe>
```

```js
document
  .getElementById("my-btn")
  .addEventListener("click", handleButtonClick, false);
function handleButtonClick(e) {
  window.parent.postMessage("iframe_message");
}
```

And also listen to the message on the parent window:

```js
window.addEventListener('iframe_message', function() {
  window.open('some url', '\_blank')
}, false
```

It was perfect! worked like a charm. It passed some minutes until I figured out the actual problem. **This only worked for same-domain iframes**. Apparently **cross-domain iframes don’t post message to the parent properly**.

I dogged the web a lot and found a really interesting inspiration on a dark edge of [stackoverflow](https://stackoverflow.com/) . Although It did not help me, It fixed me on the right direction. The solution was to use customEvents.

So I refactored the solution to:

```js
document
  .getElementById("my-btn")
  .addEventListener("click", handleButtonClick, false);
var myEvent = new CustomEvent("my_event", { detail: { url: "some url" } });
function handleButtonClick(e) {
  window.parent.dispatchEvent(myEvent);
}
```

And listen to it on the parent of course:

```js
window.addEventListener(
  "iframe_message",
  function (e) {
    var url = e.detail.url;
    window.open(url, "_blank");
  },
  false
);
```

It was amazing as I could easily pass custom data from iframe to the parent window.

## Conclusion:

Dealing with iframes is Hard. It’s not intended to be used unless there is no other way to do it.

If you’re using a same-domain iframe, you’re in heaven. You could easily control iframe’s content and also communicate to it’s parent through postMessage.

But you’re in Hell when it gets cross-domain. You could only use CustomEvent and dispatchEvent on the iframe and listen to it on the parent window. In this case try to modularize your communication protocol and pass custom data.
