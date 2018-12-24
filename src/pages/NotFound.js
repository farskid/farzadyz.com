import React from "react";
import { hot } from "react-hot-loader";
import styled from "styled-components";
import { SocialLink } from "./HomePage";
import { PresentationalPageWrapper } from "../components/PageWrapper";

const Shrug = styled.h1`
  font-size: 15vw;
  color: #000;
  margin: 0 auto;
`;

const NotFound = React.memo(() => {
  return (
    <PresentationalPageWrapper>
      <Shrug>¯\_(ツ)_/¯</Shrug>
      <h2>Looks like you're lost!</h2>
      <p>
        <SocialLink href="/" to="/">
          Willing to know me better?
        </SocialLink>
      </p>
      <p>
        <SocialLink href="/blog" to="/blog">
          How about reading my BLOG?
        </SocialLink>
      </p>
    </PresentationalPageWrapper>
  );
});

export default hot(module)(NotFound);
