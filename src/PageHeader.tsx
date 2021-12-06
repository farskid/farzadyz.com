import {
  Box,
  Link as ChakraLink,
  Stack,
  List,
  Input,
  Wrap,
  Text,
  Heading,
  ListItem,
  useOutsideClick,
  FormLabel,
} from "@chakra-ui/react";
import { Post } from "./types";
import { RefObject, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import FuzzySearch from "fuzzy-search";
import Image from "next/image";
import NextLink from "next/link";
import { useMetadata } from "./MetadataContext";

const useSearch = (
  posts: Post[],
  containerRef: RefObject<HTMLDivElement>
): {
  result: Post[];
  searchValue: string;
  setSearchValue(newValue: string): void;
} => {
  const searcherRef = useRef(
    new FuzzySearch(posts, ["title", "description", "tags"], {
      caseSensitive: false,
    })
  );
  const [q, setQ] = useState("");
  const foundPosts = useMemo(
    () => (q ? searcherRef.current.search(q) : []),
    [q]
  );
  useOutsideClick({
    ref: containerRef,
    handler: () => {
      setQ("");
    },
  });
  // Clear on ESC
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setQ("");
      }
    };

    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, []);
  return { result: foundPosts, searchValue: q, setSearchValue: setQ };
};

const navLinks: Readonly<
  Array<{ title: string; href: string; isExternal?: boolean }>
> = [
  { title: "About", href: "/" },
  { title: "CV", href: "/cv" },
  { title: "Appearances", href: "/appearances" },
  { title: "Blog", href: "/blog" },
  {
    title: "Mentorship",
    href: "https://mentorcruise.com/mentor/FarzadYousefZadeh/",
    isExternal: true,
  },
];

export const PageHeader: React.FC<{ posts: Post[] }> = ({ posts }) => {
  const searchResultsRef = useRef<HTMLDivElement>(null);
  const { result, setSearchValue, searchValue } = useSearch(
    posts,
    searchResultsRef
  );
  const { default: metadata } = useMetadata();

  return (
    <Box as="header" display="flex" flexDirection="column" alignItems="center">
      <Box
        display="block"
        as="figure"
        width="100px"
        height="100px"
        borderRadius="50%"
        backgroundImage={`url(/farzad-yousefzadeh.webp)`}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
      ></Box>
      <Text fontSize="2em" as="strong">
        {metadata.fullname}
      </Text>
      <List
        listStyleType="none"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {navLinks.map((link) => (
          <Box as="li" key={link.title}>
            {link.isExternal ? (
              <ChakraLink
                href={link.href}
                display="block"
                padding="2"
                isExternal={link.isExternal}
              >
                {link.title}
              </ChakraLink>
            ) : (
              <NextLink href={link.href} passHref>
                <ChakraLink
                  display="block"
                  padding="2"
                  isExternal={link.isExternal}
                >
                  {link.title}
                </ChakraLink>
              </NextLink>
            )}
          </Box>
        ))}
      </List>
    </Box>
  );
};
