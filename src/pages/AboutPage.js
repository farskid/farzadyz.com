import React from "react";
import { hot } from "react-hot-loader";
import { Head } from "react-static";
import { PageWrapper } from "../components/PageWrapper";

class AboutPage extends React.PureComponent {
  render() {
    return (
      <PageWrapper>
        {({ routeData }) => (
          <React.Fragment>
            <Head>
              <title>AboutPage</title>
            </Head>
            <h1>About Page</h1>
            <p>{routeData.title}</p>
          </React.Fragment>
        )}
      </PageWrapper>
    );
  }
}

export default hot(module)(AboutPage);
