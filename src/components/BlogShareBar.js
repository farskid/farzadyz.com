import React from "react";
import { rhythm } from "../utils/typography";
import twitterIcon from "./twitter.svg";
import { Link } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";

export const BlogShareBar = ({ title, href, tags, style, ...props }) => (
  <nav
    style={{
      display: "flex",
      justifyContent: "space-between",
      height: 50,
      alignItems: "center",
      marginBottom: rhythm(1),
      ...style
    }}
    {...props}
  >
    <Link to="/blog">Check out all posts</Link>
    <OutboundLink
      target="_blank"
      rel="noopener noreferrer"
      href={`http://twitter.com/share?text=${title} by @farzad_yz&amp;url=${href}&amp;hashtags=${tags
        .split(" ")
        .join(",")}`}
      style={{ lineHeight: `50px` }}
    >
      <img
        width={25}
        height={25}
        style={{ width: 25, height: 25, margin: 0, display: "block" }}
        src={twitterIcon}
        alt="share on twitter"
      />
    </OutboundLink>
  </nav>
);
