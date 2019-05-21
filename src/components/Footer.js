import React from "react";
import { rhythm } from "../utils/typography";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
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
