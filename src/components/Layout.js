import React from "react";
import "./layout.css";
import { rhythm } from "../utils/typography";
import SEO from "../components/Seo";
import { Footer } from "./Footer";

class Layout extends React.Component {
  render() {
    const {
      children,
      title,
      description,
      CustomSEO,
      isLimited = true
    } = this.props;

    return (
      <div
        className={isLimited ? "layout-container-limited" : "layout-container"}
      >
        {!!CustomSEO ? (
          <CustomSEO />
        ) : (
          <SEO
            title={title}
            description={description}
            keywords={[
              `farzad yz`,
              `javascript`,
              `typescript`,
              `react`,
              `react native`,
              `nodejs`,
              `restful services`,
              `serverless`,
              `redux`,
              `graphql`,
              `reasonml`,
              `elm`,
              `golang`,
              `automation`,
              `architecture`,
              `dx`,
              `tooling`,
              `state management`,
              `react native`,
              `statecharts`,
              `state machines`,
              `aws`,
              `cloud`,
              `api development`,
              `express`,
              `technical talks`,
              `conference talks`,
              `developer advocacy`,
              `dev rel`
            ]}
          />
        )}
        {children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
