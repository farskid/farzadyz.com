import React from "react";
import styled from "styled-components";
import classnames from "classnames";
import { Link } from "@reach/router";
import { Wrapper } from "./Wrapper";

const NavbarPositioner = styled.div`
  position: sticky;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0 30px;
  /* Required for position sticky! */
  top: 0;
  background-color: #fff;
  z-index: 3;

  @media (max-width: 30em) {
    padding: 0 15px;
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  background-color: #fff;
  height: 70px;
`;

const NavbarList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  list-style: none;
`;

const NavbarListItem = styled.li`
  margin-left: 20px;
  color: #777;
  text-transform: uppercase;
`;

export const Navbar = () => (
  <NavbarPositioner>
    <Wrapper>
      <NavbarContainer>
        <Link href="/" to="/">
          <h4 style={{ textTransform: "uppercase" }}>Farzad YZ</h4>
        </Link>
        <NavbarList>
          {/* <NavbarListItem>
            <Link href="/cv" to="/cv">
              CV
            </Link>
          </NavbarListItem>
          <NavbarListItem>
            <Link href="/appearances" to="/appearances">
              Appearances
            </Link>
          </NavbarListItem> */}
          <NavbarListItem>
            <Link
              href="/blog"
              to="/blog"
              style={{ lineHeight: "70px", display: "block" }}
            >
              Blog
            </Link>
          </NavbarListItem>
        </NavbarList>
      </NavbarContainer>
    </Wrapper>
  </NavbarPositioner>
);
