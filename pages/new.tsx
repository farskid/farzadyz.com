import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Link as ChakrLink,
  Text,
  useBoolean,
} from "@chakra-ui/react";
import type { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { MDXComponents } from "../src/MDXComponents";
import Editor from "react-simple-code-editor";
import { useEffect, useState } from "react";
import { getAllPosts } from "../src/posts";
import { Post } from "../src/types";
import { sortPostsByLatest } from "../src/utils";

const getAPIUrl = (window: Window) =>
  [window.location.origin, "api/post"].join("/");

const New: NextPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [code, setCode] = useState(selectedPost.rawContent);
  const [panelCollapsed, panelControls] = useBoolean(true);

  useEffect(() => {
    fetch(getAPIUrl(window));
  }, []);

  useEffect(() => {
    if (selectedPost.rawContent !== code) {
      fetch(getAPIUrl(window), {
        method: "post",
        body: JSON.stringify({
          ...selectedPost,
          rawContent: code,
        }),
      }).then(() => {});
    }
  }, [code, selectedPost]);

  return (
    <Flex flexDirection="column" height="100vh">
      <Flex
        as="header"
        justifyContent="space-between"
        borderBottom="1px solid"
        paddingBlock="2"
        paddingInline="5"
      >
        <Link passHref href="/blog">
          <ChakrLink
            as={Button}
            color="white"
            bg="gray.900"
            _hover={{ bg: "gray.700" }}
            _focus={{ bg: "gray.700" }}
          >
            <CloseIcon />
          </ChakrLink>
        </Link>
      </Flex>
      <Flex flex="1">
        <Flex
          flex="1"
          padding="2"
          flexDirection="column"
          gap="2"
          transition="250ms ease"
          maxWidth={panelCollapsed ? 65 : 300}
          onMouseEnter={() => {
            panelControls.toggle();
          }}
          onMouseLeave={() => {
            panelControls.toggle();
          }}
        >
          {posts.map((p) => (
            <Button
              key={p.title}
              justifyContent="left"
              colorScheme={selectedPost.title === p.title ? "blue" : null}
              onClick={() => {
                setSelectedPost(p);
              }}
            >
              <Text textOverflow="ellipsis" overflowX="hidden">
                {p.title}
              </Text>
            </Button>
          ))}
        </Flex>
        <Box border="1px dashed" height="100%" width="1px" />
        <Box flex="2">
          <Editor
            value={code}
            onValueChange={(code) => {
              console.log("code changed", code);
              setCode(code);
            }}
            // highlight={(code) => highlight(code, languages.js)}
            highlight={(code) => code}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 16,
              height: "100%",
            }}
          />
        </Box>
        <Box border="1px dashed" height="100%" width="1px" />
        <Box flex="2">
          <Box
            as="iframe"
            height="100%"
            width="100%"
            display="block"
            src={`/blog/${selectedPost.slug}`}
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await getAllPosts({ withContent: true });
  return {
    props: {
      posts: sortPostsByLatest(posts, false),
    },
  };
};

export default New;
