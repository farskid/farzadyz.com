import React from "react";
import ReactDOMServer from "react-dom/server";
import { Feed } from "feed";
import { MDXRemote } from "next-mdx-remote";
import { ChakraProvider } from "@chakra-ui/react";
import { makeMetadata } from "../content/metadata";
import { Post } from "./types";
import theme from "./theme";
import { MDXComponents } from "./MDXComponents";
import { stripHtml } from "string-strip-html";
import { serializePost } from "./serializePost";

/*
    TODO: think of:
    - Versioning the feeds
    - Best time to update the feed
*/
export const generateFeed = async (posts: Post[]): Promise<Feed> => {
  const {
    title,
    openGraph: { url },
    description,
  } = makeMetadata();
  //   Base feed
  const feed = new Feed({
    title,
    description,
    id: url,
    link: url,
    language: "en",
    feedLinks: {
      rss2: `${url}/rss.xml`,
    },
    copyright: "All rights reserved to Farzadyz.com",
  });

  feed.addContributor({ name: "Farzad Yousefzadeh", link: "@farzad_yz" });

  // This is the one line that takes long. avg 200ms per file
  const htmls = await Promise.all(posts.map((post) => serializePost(post)));

  for (let [index, post] of posts.entries()) {
    const postUrl = `${url}/${post.slug}`;
    const mdx = htmls[index];
    const htmlContent = ReactDOMServer.renderToStaticMarkup(
      <ChakraProvider resetCSS theme={theme}>
        <MDXRemote {...mdx} components={MDXComponents} />
      </ChakraProvider>
    );
    const cleanHtmlContent = stripHtml(htmlContent, {
      onlyStripTags: ["script", "style"],
      stripTogetherWithTheirContents: ["script", "style"],
    }).result;

    feed.addItem({
      title: post.title,
      id: postUrl,
      link: postUrl,
      description: post.description,
      content: cleanHtmlContent,
      author: [{ name: post.author }],
      published: new Date(post.publishedAt),
      date: new Date(),
    });
  }

  return feed;
};
