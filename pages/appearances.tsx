import { NextPage } from "next";
import { Appearances } from "../src/Appearance";
import { Layout } from "../src/Layout";
import { getAllPosts } from "../src/posts";
import { Post } from "../src/types";
import { Seo } from "../src/Seo";

const AppearancesPage: NextPage<{ posts: Post[] }> = ({ posts }) => (
  <Layout posts={posts}>
    <Seo title={(defaultTitle) => `Appearances | ${defaultTitle}`} />
    <Appearances />
  </Layout>
);

export const getStaticProps = async () => ({
  props: { posts: await getAllPosts() },
});

export default AppearancesPage;
