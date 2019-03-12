import React from "react";
import { Link } from "gatsby";
import "./Navbar.css";

export function Navbar(props) {
  return (
    <ul
      className="hidden-print"
      style={{
        listStyle: "none",
        padding: 0,
        margin: 0,
        display: "flex",
        justifyContent: "center"
      }}
    >
      <li className="navbar-item">
        <Link to="/" activeClassName="navbarActiveLink">
          About
        </Link>
      </li>
      <li className="navbar-item">
        <Link to="/cv" activeClassName="navbarActiveLink">
          CV
        </Link>
      </li>
      <li className="navbar-item">
        <Link to="/talks" activeClassName="navbarActiveLink">
          Talks
        </Link>
      </li>
      <li className="navbar-item">
        <Link to="/blog" activeClassName="navbarActiveLink">
          Blog
        </Link>
      </li>
      <li className="navbar-item">
        <Link to="/tweets" activeClassName="navbarActiveLink">
          Heroic Tweets
        </Link>
      </li>
    </ul>
  );
}
