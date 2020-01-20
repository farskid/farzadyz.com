import React from "react";
import { Link } from "gatsby";
import "./Navbar.css";

export function Navbar(props) {
  const [activeRoute, setActiveRoute] = React.useState(undefined);
  React.useEffect(() => {
    let { pathname } = window.location;
    pathname = pathname.replace(/\//gi, "");
    const routes = {
      "": "home",
      cv: "cv",
      talks: "talks",
      blog: "blog",
      tweets: "tweets"
    };

    setActiveRoute(routes[pathname]);
  }, []);
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
        <Link
          to="/"
          className={activeRoute === "home" ? "navbarActiveLink" : undefined}
        >
          About
        </Link>
      </li>
      <li className="navbar-item">
        <Link
          to="/cv"
          className={activeRoute === "cv" ? "navbarActiveLink" : undefined}
        >
          CV
        </Link>
      </li>
      <li className="navbar-item">
        <Link
          to="/talks"
          className={activeRoute === "talks" ? "navbarActiveLink" : undefined}
        >
          Talks
        </Link>
      </li>
      <li className="navbar-item">
        <Link
          to="/blog"
          className={activeRoute === "blog" ? "navbarActiveLink" : undefined}
        >
          Blog
        </Link>
      </li>
    </ul>
  );
}
