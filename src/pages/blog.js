import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { rhythm } from "../utils/typography";

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const { title, description, social } = data.site.siteMetadata;
    const posts = data.allMarkdownRemark.edges;

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
        <main>
          {posts.map(p => {
            const {
              node: {
                frontmatter: { title, id, date },
                excerpt,
                fields: { slug }
              }
            } = p;
            return (
              <article key={id} style={{ marginBottom: rhythm(2) }}>
                <h2 style={{ marginBottom: rhythm(1 / 2) }}>
                  <Link to={slug} style={{ textDecoration: "none" }}>
                    {title}
                  </Link>
                </h2>
                <date
                  style={{
                    marginBottom: rhythm(1 / 2),
                    display: "block",
                    color: "#777"
                  }}
                >
                  {date}
                </date>
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
            summary
            date(formatString: "MMMM DD, YYYY")
            tags
          }
        }
      }
    }
  }
`;
