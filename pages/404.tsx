import { NextPage } from "next";
import { Box, Link as ChakraLink } from "@chakra-ui/react";
import { Layout } from "../src/Layout";
import { SadPanda } from "../src/Icons";

const NotFound: NextPage = () => (
  <Layout>
    <Box textAlign="center">
      <Box display="flex" justifyContent="center">
        <SadPanda />
      </Box>
      <Box as="p" padding="6">
        Sorry we can&apos;t find that page.
      </Box>
    </Box>
  </Layout>
);

export default NotFound;
