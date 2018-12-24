import React from "react";
import { Link } from "gatsby";
import Image from "gatsby-image";
import "./layout.css";

import { rhythm, scale } from "../utils/typography";

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
      <React.Fragment>
        <header style={{ textAlign: "center", marginBottom: rhythm(2) }}>
          <Image
            fixed={avatar.childImageSharp.fixed}
            alt={author}
            style={{
              marginBottom: 0,
              minWidth: 100,
              borderRadius: `50%`
            }}
          />
          <h1>{author}</h1>
          <nav>
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
        </header>
      </React.Fragment>
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
