import React from "react";
import { Link, graphql } from "gatsby";

import Bio from "../components/Bio";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { rhythm, scale } from "../utils/typography";
import { BlogShareBar } from "../components/BlogShareBar";

class BlogPostTemplate extends React.Component {
  render() {
    const {
      data: {
        markdownRemark,
        avatar,
        site: { siteMetadata }
      },
      pageContext,
      location
    } = this.props;
    const post = markdownRemark;
    const siteTitle = siteMetadata.title;
    const { previous, next } = pageContext;

    return (
      <Layout
        location={location}
        title={siteTitle}
        author={siteMetadata.author}
        avatar={avatar}
        hasNavbar={true}
      >
        <SEO
          title={post.frontmatter.title}
          description={post.excerpt}
          keywords={post.frontmatter.tags.split(" ")}
        />
        <BlogShareBar
          title={post.frontmatter.title}
          tags={post.frontmatter.tags}
          href={location.href}
        />
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1)
          }}
        >
          {post.frontmatter.publishedAt}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr style={{ marginBottom: rhythm(1) }} />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
            margin: 0
          }}
        >
          {previous && (
            <li style={{ flex: 1 }}>
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            </li>
          )}
          {next && (
            <li style={{ flex: 1 }}>
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            </li>
          )}
        </ul>

        <BlogShareBar
          title={post.frontmatter.title}
          tags={post.frontmatter.tags}
          href={location.href}
          style={{ marginTop: rhythm(2) }}
        />
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
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
`;
