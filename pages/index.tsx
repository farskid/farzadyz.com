import { NextPage } from "next";
import { Layout } from "../src/Layout";
import { getAllPosts } from "../src/posts";
import { Seo } from "../src/Seo";
import { Post } from "../src/types";
import { Link, Box, Button, HStack, VStack } from "@chakra-ui/react";
import { useMetadata } from "../src/MetadataContext";
import NextLink from "next/link";

const HomePage: NextPage<{ posts: Post[] }> = ({ posts }) => {
  const { default: metadata } = useMetadata();
  return (
    <>
      <Seo />
      <Layout posts={posts}>
        <VStack gridGap="8">
          <HStack>
            <Button
              as={Link}
              href={metadata.social.twitter.link}
              isExternal
              color="white"
              bg="gray.900"
              _hover={{
                bg: "gray.700",
                textDecoration: "none",
                color: "white",
              }}
              _focus={{ bg: "gray.700" }}
            >
              Follow me on Twitter
            </Button>
          </HStack>
          <Box gridGap="5" display="flex" flexDirection="column">
            <p>
              I`m a Lead Engineer at{" "}
              <Link
                textDecoration="underline"
                isExternal
                href="https://epicgames.com"
              >
                <strong>Stately.ai</strong>
              </Link>{" "}
              and living in Finland.
            </p>
            <p>
              I`m interested in <strong>Javascript</strong>,{" "}
              <strong>Typescript</strong>, <strong>React</strong>,{" "}
              <strong>React Native</strong>, <strong>Nodejs</strong> and{" "}
              <strong>Serverless</strong>. Fascinated by{" "}
              <strong>DX Tooling</strong> and <strong>Automation</strong>.
            </p>
            <p>
              <strong>
                <NextLink href="/appearances#talks" passHref>
                  <Link textDecoration="underline">
                    Public technical speaker
                  </Link>
                </NextLink>
              </strong>
              . Passionate about <strong>UI Engineering</strong>,{" "}
              <strong>Statecharts</strong> and <strong>Reactivity</strong>.
            </p>
            <p>
              My personal hobbies include going for long walks, music, movies,
              book reading, book binding and a set of activities such as Hiking,
              Football, Badminton, Squash, Fustal, Ping pong and Volleyball. I
              do also like video games specially the platforming genre. My
              favourite video game is <em>Hollow Knight</em>.
            </p>
            <p>
              You can actively find me on{" "}
              <Link
                isExternal
                className="social-link "
                href={metadata.social.twitter.link}
                textDecoration="underline"
              >
                <strong>Twitter</strong>
              </Link>
              . Come say Hi!
            </p>
            <p className="spacing-h spacing-small">
              You can also find me on:{" "}
              <Link
                isExternal
                className="social-link "
                href={metadata.social.github.link}
                textDecoration="underline"
              >
                <strong>Github</strong>
              </Link>
              ,{" "}
              <Link
                isExternal
                className="social-link "
                href={metadata.social.stackoverflow.link}
                textDecoration="underline"
              >
                <strong>Stackoverflow</strong>
              </Link>
              ,{" "}
              <Link
                isExternal
                className="social-link "
                href={metadata.social.linkedin.link}
                textDecoration="underline"
              >
                <strong>Linkedin</strong>
              </Link>{" "}
              and{" "}
              <Link
                isExternal
                className="social-link "
                href={metadata.social.medium.link}
                textDecoration="underline"
              >
                <strong>Medium</strong>
              </Link>
              .
            </p>
          </Box>
        </VStack>
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
};

export default HomePage;
