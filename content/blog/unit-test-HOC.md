---
title: Unit Testing Higher Order Components with Enzyme and Jest
slug: unit-test-react-higher-order-components-with-jest-and-enzyme
publishedAt: 03 Nov 2017
keywords: React Javascript Jest Enzyme Unit-Test Higher-order-componenets
---

Not all the components you write for your React application can be divided into Stateful and Stateless (dumb) categories. There is a 3rd advanced type of component in React called a higher-order component. A higher-order component is a function that takes a component as an argument and returns another component. Check out my other article to see how higher-order components are used in the real world.

## Creating a HOC with Tests

We’ll be using Enzyme and Jest, but these concepts apply to any testing library.

One of the common HOCs I write for every project of mine is called withConditional. Its purpose is to render a component if and only if the condition passes, otherwise just return null.

```js
import React from "react";
const withConditional = (Component) =>
  function withConditionalComponent({ condition, ...props }) {
    if (condition) {
      return <Component {...props} />;
    }
    return null;
  };
export default withConditional;
```

As you can see, when the condition passed to the HOC evaluates to true, it returns the component, otherwise it returns null.

So how can you unit test the HOC? There are surprisingly minimal articles talking about unit testing these components, and I had a hard time figuring out the proper way. Recently the solution clicked!

## Solution

To properly test these badass components, you just need to know that they are simple functions and that’s all!

`withConditional` is used in the following manner

```js
const ConditionalComponent = withConditional(MyComponent);
class HelloWorld extends React.Component {
  render() {
    return <ConditionalComponent condition={3 > 4} />;
  }
}
```

So, we should use the exact same concept to unit test them as well.

The important thing to take into account here is to test the component for all states. For instance, if our HOC can handle two different states, depending on the condition passed to it, then we MUST account for both states in the tests.

## When condition passes:

```js
it("should render the component only when the condition passes", () => {
  const ConditionalComponent = withConditional(Component);
  const wrapper = shallow(<ConditionalComponent condition={true} />);
  expect(wrapper.html()).not.toBe(null);
});
```

## When condition fails:

```js
it("should return null when the condition fails", () => {
  const ConditionalComponent = withConditional(Component);
  const wrapper = shallow(<ConditionalComponent condition={false} />);
  expect(wrapper.html()).toBe(null);
});
```

Have fun and test it up!
