import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import savedTweets from "../tweets/index.json";
import Helmet from "react-helmet";
import { rhythm } from "../utils/typography";

export default class TweetsIndex extends React.Component {
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
        <Helmet>
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"
          />
        </Helmet>
        {Object.keys(savedTweets).map((key, index) => {
          return (
            <div
              style={{ marginBottom: rhythm(2) }}
              key={index}
              dangerouslySetInnerHTML={{ __html: savedTweets[key] }}
            />
          );
        })}
      </Layout>
    );
  }
}

export const TweetsQuery = graphql`
  query TweetsQuery {
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
