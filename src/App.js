import React from "react";
import { hot } from "react-hot-loader";
import { Router } from "react-static";
import Routes from "react-static-routes";
import * as Styles from "./styles";
import { Navbar } from "./components/Navbar";

const App = () => (
  <React.Fragment>
    <Styles.Global />
    <Styles.Wrapper>
      <Router>
        <React.Fragment>
          <Navbar />
          <Routes />
        </React.Fragment>
      </Router>
    </Styles.Wrapper>
  </React.Fragment>
);

export default hot(module)(App);
