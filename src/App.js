import React from "react";
import { hot } from "react-hot-loader";
import { Router, Route } from "react-static";
import Routes from "react-static-routes";
import { createGlobalStyle } from "styled-components";
import { Navbar } from "./components/Navbar";
import { Wrapper } from "./components/Wrapper";
import NotFound from "./pages/NotFound";

// Global styles
const Global = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 400;
    font-size: 16px;
    margin: 0;
    padding: 0;
    line-height: 1.5;
    background-color: #fff;
  }

  a {
    text-decoration: none;
  }
  a:visited {
    color: inherit;
  }
`;

const App = () => (
  <React.Fragment>
    <Global />
    <Router>
      <Wrapper>
        <React.Fragment>
          <Navbar />
          <Routes />
        </React.Fragment>
      </Wrapper>
    </Router>
  </React.Fragment>
);

export default hot(module)(App);
