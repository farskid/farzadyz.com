import React from "react";
import { graphql } from "gatsby";
import Bio from "../components/Bio";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { rhythm } from "../utils/typography";
import { SiteHeader } from "../components/SiteHeader";
import { buttons } from "../constants";

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const { avatar } = data;
    const { siteMetadata } = data.site;
    const { title, description, author, social } = siteMetadata;

    return (
      <Layout title={title} description={description}>
        <SiteHeader siteMetadata={siteMetadata} author={author} avatar={avatar}>
          <SiteHeader.Avatar
            avatar={avatar.childImageSharp.fixed}
            author={author}
          />
          <h1>{author}</h1>
          <nav style={{ marginBottom: rhythm(1) }}>
            <SiteHeader.Navbar />
          </nav>
          <div>
            <SiteHeader.Button
              href="mailto:farskid@gmail.com?subject=We'd like to hire you as a consultant"
              color={buttons.black}
            >
              Hire Me as a Consultant
            </SiteHeader.Button>
            <SiteHeader.Button
              href="https://twitter.com/intent/follow?original_referer=http%3A%2F%2Flocalhost%3A8000%2F&amp;amplref_src=twsrc%5Etfw&amp;screen_name=farzad_yz&amp;tw_p=followbutton"
              external={true}
              color={buttons.blue}
            >
              Follow {social.twitterHandle} on Twitter
            </SiteHeader.Button>
          </div>
        </SiteHeader>
        <Bio />
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query HomePageQuery {
    avatar: file(absolutePath: { regex: "/farzadyz_new.jpg/" }) {
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
          twitterHandle
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
