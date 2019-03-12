import React from "react";
import "./layout.css";
import { rhythm } from "../utils/typography";
import SEO from "../components/Seo";

class Layout extends React.Component {
  render() {
    const { children, title, description } = this.props;

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
        }}
      >
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
        {children}
      </div>
    );
  }
}

export default Layout;
