import React from "react";
import { Box } from "@chakra-ui/react";
import { PageHeader } from "./PageHeader";
import { PageFooter } from "./PageFooter";
import { Post } from "./types";

export const Layout: React.FC<{ posts: Post[] }> = ({ posts, children }) => (
  <Box
    display="flex"
    flexDirection="column"
    maxWidth="var(--site-layout-max-width)"
    marginLeft="auto"
    marginRight="auto"
    paddingTop="2.25em"
    paddingBottom="2.25em"
    paddingRight="1em"
    paddingLeft="1em"
    gridGap="3em"
    minHeight="100vh"
    justifyContent="space-between"
    // borderInline="1px solid"
    // borderTop="20px solid"
    // borderBottom="100px solid"
  >
    <PageHeader posts={posts} />
    <Box as="main">{children}</Box>
    <PageFooter />
  </Box>
);
