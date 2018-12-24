import React from "react";
import { hot } from "react-hot-loader";
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "@reach/router";
import "../syntax-highlight.css";
import { PageWrapper } from "../components/PageWrapper";
import twitterIcon from "../icons/twitter.svg";

const Global = createGlobalStyle`
  blockquote {
    background-color: rgba(0,0,0,0.05);
    margin: 0 auto;
    padding: 10px;
    border-left: 2px solid #292929;
  }
  .blog img {
    display: block;
    max-width: 100%;
  }
`;

const Post = styled.article`
  text-align: left;
`;

const PostTitle = styled.h1`
  font-size: 2em;
  margin-bottom: 0;
`;

const PostDate = styled.p`
  margin: 0 auto;
  font-weight: 500;
  font-size: 14px;
  color: #777;
`;

const PostContents = styled.div`
  margin-top: 30px;
  margin-bottom: 50px;
`;

const PostTopBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 30px;

  @media (max-width: 30em) {
    padding: 5px 15px;
  }
`;

const Button = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.05);
  display: inline-block;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const ShareLink = styled.a`
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const ShareIcon = styled.img`
  width: 30px;
  height: 30px;
`;

const Hr = styled.hr`
  margin: 30px;
  border: 0 none;
  background-color: rgba(0, 0, 0, 0.1);
  height: 1px;

  @media (max-width: 30em) {
    margin: 30px auto;
  }
`;

const PostContentContainer = styled.div`
  padding: 0 30px;
  @media (max-width: 30em) {
    padding: 0 15px;
  }
`;

const isPostUpdated = post =>
  post.updatedAt && post.updatedAt !== post.publishedAt;

const PostNavbar = React.memo(({ post, url }) => {
  return (
    <PostTopBar>
      <Button>
        <Link href="/blog" to="/blog" style={{ display: "block", padding: 6 }}>
          Back to Blog
        </Link>
      </Button>
      <ShareLink
        target="_blank"
        id="share-post-twitter"
        rel="noopener noreferrer"
        href={`http://twitter.com/share?text=${
          post.title
        } by @farzad_yz&amp;url=${url}&amp;hashtags=${post.tags
          .split(" ")
          .join(",")}`}
      >
        <ShareIcon src={twitterIcon} alt="share on twitter" />
      </ShareLink>
    </PostTopBar>
  );
});

class BlogPage extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Global />
        <PageWrapper>
          {({ routeData: { post, url } }) => (
            <Post>
              <PostNavbar post={post} url={url} />
              <PostContentContainer>
                <PostTitle>{post.title}</PostTitle>
                <PostDate>{post.publishedAt}</PostDate>
                {isPostUpdated(post) && <p>Last updated at {post.updatedAt}</p>}
                <PostContents
                  className="blog"
                  dangerouslySetInnerHTML={{ __html: post.contents }}
                />
              </PostContentContainer>
              <Hr />
              <PostNavbar post={post} url={url} />
            </Post>
          )}
        </PageWrapper>
      </React.Fragment>
    );
  }
}

export default hot(module)(BlogPage);
