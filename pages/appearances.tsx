import { NextPage } from "next";
import { Appearances } from "../src/Appearance";
import { Layout } from "../src/Layout";
import { Seo } from "../src/Seo";

const AppearancesPage: NextPage = () => (
  <Layout>
    <Seo title={(defaultTitle) => `Appearances | ${defaultTitle}`} />
    <Appearances />
  </Layout>
);

export default AppearancesPage;
