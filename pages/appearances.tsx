import { GetStaticProps, NextPage } from "next";
import { Appearances } from "../src/Appearance";
import { Layout } from "../src/Layout";
import { Seo } from "../src/Seo";
import fs from "fs/promises";
import { Podcast, Talk } from "../src/types";

const AppearancesPage: NextPage<{ appearances: Array<Talk | Podcast> }> = ({
  appearances,
}) => (
  <Layout>
    <Seo title={(defaultTitle) => `Appearances | ${defaultTitle}`} />
    <Appearances appearances={appearances} />
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const appearances = JSON.parse(
    (await fs.readFile("content/appearances.json")).toString()
  );

  return {
    props: {
      appearances,
    },
  };
};

export default AppearancesPage;
