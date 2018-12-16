import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { RouteData, Head } from "react-static";

class AboutPage extends Component {
  render() {
    return (
      <RouteData
        render={data => (
          <React.Fragment>
            <Head>
              <title>AboutPage</title>
            </Head>
            <h1>About Page</h1>
            <p>{data.title}</p>
          </React.Fragment>
        )}
      />
    );
  }
}

export default hot(module)(AboutPage);
