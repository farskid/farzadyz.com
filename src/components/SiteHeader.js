import React from "react";
import { Navbar } from "./Navbar";
import Image from "gatsby-image";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { rhythm } from "../utils/typography";
import "./SiteHeader.css";

function NavButton({ external = false, href, children, color, style = {} }) {
  const Tag = external ? OutboundLink : "a";

  return (
    <Tag
      style={{
        color: "#fff",
        padding: "6px 12px",
        borderRadius: 3,
        textDecoration: "none",
        fontSize: rhythm(1 / 2),
        whiteSpace: "nowrap",
        textTransform: "uppercase",
        backgroundColor: color,
        ...style
      }}
      target="_blank"
      href={href}
      className="hidden-print site-header-button"
    >
      {children}
    </Tag>
  );
}

function SiteHeader({ children }) {
  return <header className="site-header">{children}</header>;
}

// navbar
SiteHeader.Navbar = () => <Navbar />;
SiteHeader.Navbar.displayName = "SiteHeader.Navbar";

// Button
SiteHeader.Button = ({ external, href, children, ...props }) => (
  <NavButton external={external} href={href} {...props}>
    {children}
  </NavButton>
);
SiteHeader.Button.displayName = "SiteHeader.Button";

// Avatar Image
SiteHeader.Avatar = ({ avatar, author }) => (
  <Image
    fixed={avatar}
    alt={author}
    style={{ marginBottom: 0, minWidth: 100, borderRadius: `50%` }}
  />
);
SiteHeader.Avatar.displayName = "SiteHeader.Avatar";

export { SiteHeader };
