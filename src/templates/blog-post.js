import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { rhythm, scale } from "../utils/typography";
import { SiteHeader } from "../components/SiteHeader";
import { buttons } from "../constants";
import { BlogShareBar } from "../components/BlogShareBar";
import "./blogPost.css";

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
    const siteDescription = siteMetadata.description;
    const author = siteMetadata.author;
    const social = siteMetadata.social;
    const { previous, next } = pageContext;

    return (
      <Layout
        title={siteTitle}
        description={siteDescription}
        CustomSEO={() => (
          <SEO
            title={post.frontmatter.title}
            description={post.excerpt}
            keywords={post.frontmatter.tags.split(" ")}
          />
        )}
      >
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
              href="mailto:farskid@gmail.com?subject=We'd like to hire you to give a talk for us"
              color={buttons.green}
            >
              Hire Me to give a Talk
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
            flexDirection: "column",
            listStyle: `none`,
            padding: 0,
            margin: 0
          }}
        >
          {previous && (
            <li>
              <Link
                to={previous.fields.slug}
                rel="prev"
                style={{ display: "block" }}
              >
                ← {previous.frontmatter.title}
              </Link>
            </li>
          )}
          {next && (
            <li>
              <Link
                to={next.fields.slug}
                rel="next"
                style={{ display: "block" }}
              >
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
        social {
          twitterHandle
        }
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
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
  }
`;
