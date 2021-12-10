import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";
import { PageHeader } from "./PageHeader";
import { PageFooter } from "./PageFooter";

interface LayoutProps extends BoxProps {
  isExtended?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  isExtended,
  ...props
}) => (
  <Box
    {...props}
    display="flex"
    flexDirection="column"
    maxWidth={isExtended ? "100%" : "var(--site-layout-max-width)"}
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
    <PageHeader />
    <Box as="main">{children}</Box>
    <PageFooter />
  </Box>
);
