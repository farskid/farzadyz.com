import React from "react";
import { hot } from "react-hot-loader";
import { Root, Routes } from "react-static";
import { createGlobalStyle } from "styled-components";

// Global styles
const Global = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  body {
    font-weight: 400;
    font-size: 16px;
    margin: 0;
    padding: 0;
    background-color: #fff;
    line-height: 2;
    /* font-family: IBM Plex Mono, Consolas, Monaco, "Andale Mono", "Ubuntu Mono",
    monospace; */
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  a:visited {
    color: inherit;
  }
`;

const App = React.memo(() => {
  return (
    <React.Fragment>
      <Global />
      <Root>
        <Routes />
      </Root>
    </React.Fragment>
  );
});

export default hot(module)(App);
