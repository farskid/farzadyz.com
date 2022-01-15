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
  Button,
  Flex,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import fs from "fs";
import { Layout } from "../../src/Layout";
import { getAllPosts } from "../../src/posts";
import { Post } from "../../src/types";
import Link from "next/link";
import { Seo } from "../../src/Seo";
import { formatDate, sortPostsByLatest } from "../../src/utils";
import { generateFeed } from "../../src/feed";
import { useMemo, useState } from "react";
import { isEnv } from "../../lib/utils";

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
        <Flex justifyContent="center">
          <Button
            as={ChakraLink}
            href="new"
            color="white"
            bg="gray.900"
            _hover={{
              bg: "gray.700",
              textDecoration: "none",
              color: "white",
            }}
            _focus={{ bg: "gray.700" }}
          >
            Add new post
          </Button>
        </Flex>
        <Box
          padding={{ base: "3", md: "12" }}
          display="flex"
          flexDirection="column"
          align="center"
        >
          {isEnv("development") && (
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

  if (isEnv("development")) {
    posts = sortPostsByLatest(posts, true);
  } else {
    posts = posts.filter((p) => !p.draft);
  }

  if (isEnv("production")) {
    const feed = await generateFeed(posts);

    fs.mkdirSync("public/feeds/", { recursive: true });
    fs.writeFileSync("public/feeds/rss.xml", feed.rss2());
    fs.writeFileSync("public/feeds/feed.json", feed.json1());
    fs.writeFileSync("public/feeds/atom.xml", feed.atom1());
  }

  return { props: { posts } };
};

export default Home;
