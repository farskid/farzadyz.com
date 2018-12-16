import React from "react";
import { hot } from "react-hot-loader";
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-static";
import Prism from "prismjs";
import "../dracula-prism.css";
import { PageWrapper } from "../components/PageWrapper";
import twitterIcon from "../icons/twitter.svg";

const Global = createGlobalStyle`
  blockquote {
    background-color: rgba(0,0,0,0.05);
    margin: 0 auto;
    padding: 10px;
    border-left: 2px solid #292929;
  }
  .highlight img {
    display: block;
    max-width: 100%;
  }
`;

const Post = styled.article`
  text-align: left;
`;

const PostTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 0;
`;

const PostDate = styled.p`
  margin: 0 auto;
  font-style: italic;
  font-weight: 700;
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
`;

const Button = styled.div`
  border: 1px solid #777;
  border-radius: 4px;
  display: inline-block;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const ShareIcon = styled.img`
  width: 30px;
  height: 30px;
`;

const PrismLoader = () => {
  Prism.highlightAll(false);
  return null;
};

const isPostUpdated = post =>
  post.updatedAt && post.updatedAt !== post.publishedAt;

class BlogPage extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Global />
        <PageWrapper>
          {({ routeData: { post } }) => (
            <Post>
              <PostTopBar>
                <Button>
                  <Link
                    href="/blog"
                    to="/blog"
                    style={{ display: "block", padding: 6 }}
                  >
                    Back to Blog
                  </Link>
                </Button>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`http://twitter.com/share?text=${
                    post.title
                  } by @farzad_yz&amp;url=${
                    window.location.href
                  }&amp;hashtags=${post.tags.split(" ").join(",")}`}
                >
                  <ShareIcon src={twitterIcon} alt="share on twitter" />
                </a>
              </PostTopBar>
              <PostTitle>{post.title}</PostTitle>
              <PostDate>{post.publishedAt}</PostDate>
              {isPostUpdated(post) && <p>Last updated at {post.updatedAt}</p>}
              <PostContents
                className="highlight"
                dangerouslySetInnerHTML={{ __html: post.contents }}
              />
              <PrismLoader />
            </Post>
          )}
        </PageWrapper>
      </React.Fragment>
    );
  }
}

export default hot(module)(BlogPage);
