import { NextPage } from "next";
import { Appearances } from "../src/Appearance";
import { Layout } from "../src/Layout";
import { getAllPosts } from "../src/posts";
import { Post } from "../src/types";

const Page: NextPage<{ posts: Post[] }> = ({ posts }) => (
  <Layout posts={posts}>
    <Appearances />
  </Layout>
);

export const getStaticProps = async () => ({
  props: { posts: await getAllPosts() },
});

export default Page;
