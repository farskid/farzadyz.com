import React from "react";
import { hot } from "react-hot-loader";
import styled from "styled-components";
import { Link } from "@reach/router";
import { PageWrapper } from "../components/PageWrapper";

const PostList = styled.ul`
  list-style: none;
  display: block;
  margin: 0;
  padding: 0;
`;

const StyledPost = styled.li`
  margin-bottom: 20px;
  display: block;
  text-align: left;
  position: relative;
  border-radius: 4px;

  &:hover {
    /* box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.2); */
  }
`;

const PostTitle = styled.h2`
  font-size: 18px;
  margin: 0 auto;
`;

const PostDate = styled.p`
  margin: 0 auto;
  font-style: italic;
  font-size: 14px;
  color: #777;
`;

const PostContentContainer = styled.div`
  padding: 0 30px;
  @media (max-width: 30em) {
    padding: 0 15px;
  }
`;

const PostSummary = styled.p``;

export const PostListItem = React.memo(({ post }) => {
  const url = `/blog/${post.slug}`;
  return (
    <StyledPost key={post.id}>
      <Link
        to={url}
        href={url}
        style={{ display: "block", height: "100%", color: "inherit" }}
      >
        <PostDate>{post.publishedAt}</PostDate>
        <PostTitle>{post.title}</PostTitle>
        {/* <PostSummary>{post.summary}</PostSummary> */}
      </Link>
    </StyledPost>
  );
});

class BlogPage extends React.PureComponent {
  render() {
    return (
      <PageWrapper>
        {({ routeData }) => (
          <PostContentContainer>
            <PostList>
              {routeData.posts.map(p => (
                <PostListItem post={p} key={p.id} />
              ))}
            </PostList>
          </PostContentContainer>
        )}
      </PageWrapper>
    );
  }
}

export default hot(module)(BlogPage);
