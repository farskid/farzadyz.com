import React from "react";
import { hot } from "react-hot-loader";
import { Head } from "react-static";
import { PageWrapper } from "../components/PageWrapper";

class AppearancePage extends React.PureComponent {
  render() {
    return (
      <PageWrapper>
        {({ routeData }) => (
          <React.Fragment>
            <Head>
              <title>AppearancePage</title>
            </Head>
            <h1>Appearance Page</h1>
            <p>{routeData.title}</p>
          </React.Fragment>
        )}
      </PageWrapper>
    );
  }
}

export default hot(module)(AppearancePage);
