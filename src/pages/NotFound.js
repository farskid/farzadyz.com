import React from "react";
import { hot } from "react-hot-loader";
import styled from "styled-components";
import { PageWrapper } from "../components/PageWrapper";
import { SocialLink } from "./HomePage";
import { PostListItem } from "./BlogPage";

const Shrug = styled.h1`
  font-size: 15vw;
  color: #000;
  margin: 0 auto;
`;

const BlogPostContainer = styled.div`
  text-align: left;
  margin-top: 50px;
`;

const NotFound = React.memo(() => {
  return (
    <PageWrapper>
      {({ routeData: { randomPost } }) => (
        <React.Fragment>
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
          <BlogPostContainer>
            <p>In the meantime, Here is also a random post from my blog</p>
            <PostListItem post={randomPost} />
          </BlogPostContainer>
        </React.Fragment>
      )}
    </PageWrapper>
  );
});

export default hot(module)(NotFound);
