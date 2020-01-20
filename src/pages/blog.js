import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import { rhythm } from "../utils/typography";
import { SiteHeader } from "../components/SiteHeader";
import { buttons } from "../constants";

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const {
      avatar,
      site: { siteMetadata },
      allMarkdownRemark
    } = data;
    const { title, description, author, social } = siteMetadata;
    const posts = allMarkdownRemark.edges;

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
              href="https://twitter.com/intent/follow?original_referer=http%3A%2F%2Flocalhost%3A8000%2F&amp;amplref_src=twsrc%5Etfw&amp;screen_name=farzad_yz&amp;tw_p=followbutton"
              external={true}
              color={buttons.blue}
            >
              Follow {social.twitterHandle} on Twitter
            </SiteHeader.Button>
          </div>
        </SiteHeader>
        <main>
          {posts.map((p, index) => {
            const {
              node: {
                frontmatter: { title, date },
                excerpt,
                fields: { slug }
              }
            } = p;
            return (
              <article key={index} style={{ marginBottom: rhythm(2) }}>
                <h2 style={{ marginBottom: rhythm(1 / 2) }}>
                  <Link to={slug} style={{ textDecoration: "none" }}>
                    {title}
                  </Link>
                </h2>
                <p
                  style={{
                    marginBottom: rhythm(1 / 2),
                    display: "block",
                    color: "#777"
                  }}
                >
                  {date}
                </p>
                <div dangerouslySetInnerHTML={{ __html: excerpt }} />
              </article>
            );
          })}
        </main>
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query BlogPageQuery {
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            slug
            id
            date(formatString: "MMMM DD, YYYY")
            tags
          }
        }
      }
    }
  }
`;
