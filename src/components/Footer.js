import React from "react";
import { rhythm } from "../utils/typography";

export function Footer() {
  return (
    <footer
      style={{
        fontSize: "0.8em",
        textAlign: "center",
        marginTop: rhythm(4),
        marginRight: rhythm(-3 / 4),
        marginBottom: rhythm(-1.5),
        marginLeft: rhythm(-3 / 4),
        padding: `${rhythm(0.75)} 0`,
        color: "#777",
        fontWeight: 600
      }}
    >
      The materials of this website are licensed under
      <a
        target="_blank"
        style={{ marginLeft: rhythm(0.25), display: "inline-block" }}
        href="https://creativecommons.org/licenses/by-nc/2.0/"
      >
        The Creative Commons
      </a>
    </footer>
  );
}
