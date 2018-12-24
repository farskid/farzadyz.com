import React from "react";
import { Link, graphql } from "gatsby";

import Bio from "../components/Bio";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { rhythm } from "../utils/typography";

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const { title, description, social } = data.site.siteMetadata;

    return (
      <Layout
        location={this.props.location}
        title={title}
        avatar={data.avatar}
        author={data.site.siteMetadata.author}
        hasNavbar={true}
      >
        <SEO
          title={title}
          description={description}
          keywords={[
            `farzad yz`,
            `javascript`,
            `react`,
            `redux`,
            `typescript`,
            `nodejs`,
            `reasonml`,
            `elm`,
            `graphql`,
            `golang`,
            `automation`,
            `architecture`,
            `dx`,
            `tooling`,
            `state management`,
            `react native`
          ]}
        />
        <Bio />
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query HomePageQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
        author
        social {
          twitter
          github
          linkedin
          medium
          stackoverflow
        }
      }
    }
  }
`;
