import React from "react";
import { Link } from "gatsby";
import Image from "gatsby-image";
import "./layout.css";
import { StaticQuery, graphql } from "gatsby";

import { rhythm, scale } from "../utils/typography";
import { OutboundLink } from "gatsby-plugin-google-analytics";

class Layout extends React.Component {
  render() {
    const {
      location,
      title,
      children,
      avatar,
      author,
      hasNavbar = false
    } = this.props;

    const rootPath = `${__PATH_PREFIX__}/`;

    const createHeader = () => (
      <StaticQuery
        query={detailsQuery}
        render={data => (
          <header style={{ textAlign: "center", marginBottom: rhythm(2) }}>
            <Image
              fixed={avatar.childImageSharp.fixed}
              alt={author}
              style={{ marginBottom: 0, minWidth: 100, borderRadius: `50%` }}
            />
            <h1>{author}</h1>
            <nav style={{ marginBottom: rhythm(1) }}>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                <li style={{ margin: "0 5px" }}>
                  <Link to="/blog" style={{}}>
                    Blog
                  </Link>
                </li>
                <li style={{ margin: "0 5px" }}>
                  <Link to="/">About</Link>
                </li>
              </ul>
            </nav>
            <OutboundLink
              style={{
                backgroundColor: "#1b95e0",
                color: "#fff",
                padding: "6px 12px",
                borderRadius: 3,
                textDecoration: "none",
                fontSize: rhythm(1 / 2)
              }}
              target="_blank"
              href="https://twitter.com/intent/follow?original_referer=http%3A%2F%2Flocalhost%3A8000%2F&amp;amplref_src=twsrc%5Etfw&amp;screen_name=farzad_yz&amp;tw_p=followbutton"
            >
              Follow {data.site.siteMetadata.social.twitterHandle} on Twitter
            </OutboundLink>
          </header>
        )}
      />
    );

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
        }}
      >
        {hasNavbar && createHeader()}
        {children}
      </div>
    );
  }
}

export default Layout;

const detailsQuery = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        social {
          twitterHandle
        }
      }
    }
  }
`;
