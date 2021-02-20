---
title: useBackButton hook to handle back button behavior in React Native
publishedAt: 12 Aug 2019
keywords: React React-Native React-hooks custom-hooks
---

[React hooks](https://reactjs.org/docs/hooks-intro.html) help with carrying stateful logic and keeping their lifecycle separate from the view layer lifecycle. They've been around since React v16.8 and since people have been avoiding class components in favor of hooks.

One of the somewhat interesting aspects of hooks is their flexibility in terms of composition and abstraction. If a code snippet using different [built-in hooks](https://reactjs.org/docs/hooks-reference.html) is handling a part of logic that is separate and independent from other parts, it can be abstracted away as a [**Custom Hook**](https://reactjs.org/docs/hooks-custom.html).

## useBackButton custom hook

To handle the behavior of hardware back button in Android and tvOS devices using React Native, there is [_BackHandler_](https://facebook.github.io/react-native/docs/backhandler.html) API that can assist in overriding the default behavior or patching it.

`BackHandler` takes an event-driven approach to offer an API, meaning that to subscribe to back button presses, you'll need to register an event listener.

```js
import { BackHandler } from "react-native";

function backButtonHandler() {}

BackHandler.addEventListener("hardwareBackPress", backButtonHandler);
```

and of course, to de-register this subscription, you'll need to use `removeListener`, the same way we do so handling DOM events.

```js
backButtonHandler.removeEventListener("hardwareBackPress", backButtonHandler);
```

### use Hooks to utilize BackHandler

Subscriptions are side effects! therefore, we can use `useEffect` built-in hook to execute them. It's important to notice that `useEffect` requires us to return a function to remove the subscription once React is willing to clean up! Cleanups are usual when the component is being unmounted or one of the dependencies of the `useEffect` hook change, so React needs to clean up previous subscriptions of that hook and re-execute it!

[Read more about subscriptions and cleanups in _useEffect_](https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup)

```jsx
function backButtonHandler() {}

function MyComponent() {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backButtonHandler);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", backButtonHandler);
    };
  }, [backButtonHandler]);

  return <View>...</View>;
}
```

### useBackButton is born!

while the above code snippet works perfectly, copy-pasting it into all the screens might sound frustrating to some of us (we're freaks after all)! To help to remove our frustrations, React offers a way to build your custom hook.

```jsx
/* ComponentA */
function backButtonHandlerForA() {}
function ComponentA() {
  // Frustration begins!
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backButtonHandlerForA);

    return () => {
      BackHandler.removeEventListener(
        "hardwareBackPress",
        backButtonHandlerForA
      );
    };
  }, [backButtonHandlerForA]);

  return <ViewA />;
}

/* ComponentB */
function backButtonHandlerForB() {}
function ComponentB() {
  // Frustration begins!
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backButtonHandlerForB);

    return () => {
      BackHandler.removeEventListener(
        "hardwareBackPress",
        backButtonHandlerForB
      );
    };
  }, [backButtonHandlerForB]);

  return <ViewB />;
}
```

A custom hook is just an abstraction to share the same logic between components and hooks, the same way we do this between functions in a regular programming.
Components are functions. Hooks are functions as well. You get the idea, right?!

In cases of _ComponentA_ and _ComponentB_ samples above, registration, removal and hook implementation are the same. it's just the handlers that can be different per component. So our custom hook needs to provide those common parts and only accept the changing part (handler per component) as an incoming argument.

```jsx
/* highlight-start */
/* useBackButton */
function useBackButton(handler) {
  // Frustration isolated! Yay! 🎉
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handler);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handler);
    };
  }, [handler]);
}
/* highlight-end */

/* ComponentA */
function backButtonHandlerForA() {}
function ComponentA() {
  // utilize custom hook
  useBackButtton(backButtonHandlerForA);
  return <ViewA />;
}

/* ComponentB */
function backButtonHandlerForB() {}
function ComponentB() {
  // utilize custom hook
  useBackButtton(backButtonHandlerForB);

  return <ViewB />;
}
```

## Recap

If you intend to share a common logic between components and built-in hooks, you can abstract that away by building your custom hook. Make sure to read the impressively detailed docs of Hooks and **Rules of Hooks** from the official docs.

Cheers!
