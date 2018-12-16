import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Wrapper } from "./Wrapper";

const NavbarPositioner = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid #999;
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  height: 70px;
`;

const NavbarList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
  list-style: none;
`;

const NavbarListItem = styled.li`
  margin: 0 10px;
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
          <NavbarListItem>
            <Link href="/cv" to="/cv">
              CV
            </Link>
          </NavbarListItem>
          <NavbarListItem>
            <Link href="/appearances" to="/appearances">
              Appearances
            </Link>
          </NavbarListItem>
          <NavbarListItem>
            <Link href="/blog" to="/blog">
              Blog
            </Link>
          </NavbarListItem>
        </NavbarList>
      </NavbarContainer>
    </Wrapper>
  </NavbarPositioner>
);
