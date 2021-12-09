import {
  Box,
  List,
  ListItem,
  Heading,
  Text,
  Link as ChakraLink,
  Badge,
  Switch,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import fs from "fs";
import { Layout } from "../../src/Layout";
import { getAllPosts } from "../../src/posts";
import { Post } from "../../src/types";
import Link from "next/link";
import { Seo } from "../../src/Seo";
import { formatDate } from "../../src/utils";
import { generateFeed } from "../../src/feed";
import { useMemo, useState } from "react";

function sortPostsByLatestAndDraftFirst(posts: Post[]) {
  let draftPosts = [] as Post[],
    publishedPosts = [] as Post[];

  posts.forEach((post) => {
    if (post.draft) {
      draftPosts.push(post);
    } else {
      publishedPosts.push(post);
    }
  });

  return draftPosts.concat(
    publishedPosts.slice().sort((a, b) => {
      const aDate = new Date((a as Post).publishedAt).getTime();
      const bDate = new Date((b as Post).publishedAt).getTime();
      return bDate - aDate;
    })
  );
}

const Home: NextPage<{ posts: Post[] }> = ({ posts }) => {
  const [draftsShown, setDraftsShown] = useState(true);
  const postsList = useMemo(() => {
    if (draftsShown) {
      return posts;
    }
    return posts.filter((p) => !p.draft);
  }, [posts, draftsShown]);
  return (
    <>
      <Seo title={(defaultTitle) => `Blog | ${defaultTitle}`} />
      <Layout>
        <Box
          padding={{ base: "3", md: "12" }}
          display="flex"
          flexDirection="column"
          align="center"
        >
          {process.env.NODE_ENV === "development" && (
            <Box>
              <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="toggle-draft-posts" mb="0">
                  Draft posts
                </FormLabel>
                <Switch
                  defaultChecked={draftsShown}
                  onChange={(e) => {
                    setDraftsShown(e.target.checked);
                  }}
                  id="toggle-draft-posts"
                />
              </FormControl>
            </Box>
          )}
          <List
            spacing="4"
            maxW="3xl"
            align="left"
            textAlign="left"
            listStyleType="none"
          >
            {postsList.map((post) => (
              <ListItem key={post.slug} marginTop="0">
                {/* Formatting href makes server and client rendered hrefs consistent */}
                <Link href={`/blog/${post.slug}`} passHref>
                  <ChakraLink paddingBlock="4" display="block">
                    <Heading fontSize="l">
                      {post.draft && <Badge colorScheme="yellow">Draft</Badge>}{" "}
                      <strong>{post.title}</strong>
                    </Heading>
                    <Text as="small">{formatDate(post.publishedAt)}</Text>
                  </ChakraLink>
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  let posts = await getAllPosts();

  if (process.env.NODE_ENV === "development") {
    posts = sortPostsByLatestAndDraftFirst(posts);
  } else {
    posts = posts.filter((p) => !p.draft);
  }

  const feed = await generateFeed(posts);

  fs.mkdirSync("public/feeds/", { recursive: true });
  fs.writeFileSync("public/feeds/rss.xml", feed.rss2());
  fs.writeFileSync("public/feeds/feed.json", feed.json1());
  fs.writeFileSync("public/feeds/atom.xml", feed.atom1());

  return { props: { posts } };
};

export default Home;
