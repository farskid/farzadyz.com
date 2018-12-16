import React from "react";
import { hot } from "react-hot-loader";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { PageWrapper } from "../components/PageWrapper";

const PostList = styled.ul`
  list-style: none;
  display: block;
  margin: 0;
  padding: 0;
`;

const StyledPost = styled.li`
  margin-bottom: 10px;
  display: block;
  padding: 10px;
  text-align: left;
  position: relative;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: 150ms;

  &:hover {
    transform: translate(-5px, -5px);
    box-shadow: 5px 5px 20px 0px #999;
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

const PostSummary = styled.p``;

export const PostListItem = ({ post }) => {
  const url = `/blog/${post.slug}`;
  return (
    <StyledPost key={post.id}>
      <Link
        to={url}
        href={url}
        style={{ display: "block", height: "100%", color: "inherit" }}
      >
        <PostTitle>{post.title}</PostTitle>
        <PostDate>{post.publishedAt}</PostDate>
        <PostSummary>{post.summary}</PostSummary>
      </Link>
    </StyledPost>
  );
};

class BlogPage extends React.PureComponent {
  render() {
    return (
      <PageWrapper>
        {({ routeData }) => (
          <React.Fragment>
            <PostList>
              {routeData.posts.map(p => (
                <PostListItem post={p} key={p.id} />
              ))}
            </PostList>
          </React.Fragment>
        )}
      </PageWrapper>
    );
  }
}

export default hot(module)(BlogPage);
