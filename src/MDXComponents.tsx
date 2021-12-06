import { Tweet, YouTube } from "mdx-embed";
import { Viz } from "./Viz";
import { Text, Heading, Box } from "@chakra-ui/react";
import React, { useCallback, useEffect, useLayoutEffect, useRef } from "react";

const Pre: React.FC = (props) => {
  const ref = useRef<HTMLPreElement>(null!);

  const codeBlockExpander = useCallback(() => {
    console.log("expand");
    if (ref.current) {
      //
      const scrollW = ref.current.scrollWidth;
      const clientW = ref.current.clientWidth;
      const diffW = scrollW - clientW;

      const styles = getComputedStyle(document.documentElement);
      const viewportW =
        parseFloat(styles.getPropertyValue("--site-layout-max-width")) *
        parseFloat(styles.fontSize);

      // console.log(ref.current, scrollW, clientW, diffW);

      // If it's scrolling and if viewport allow for expansion, expand the element
      if (diffW > 0 && window.innerWidth >= viewportW + diffW) {
        ref.current.style.width = diffW + clientW + "px";
        ref.current.style.marginLeft = -1 * (diffW / 2) + "px";
      }
    }
  }, []);

  // Expand on first render
  useEffect(() => {
    codeBlockExpander();
  }, [codeBlockExpander]);

  // Expand on viewport change
  useEffect(() => {
    window.addEventListener("resize", codeBlockExpander);
    return () => {
      window.removeEventListener("resize", codeBlockExpander);
    };
  }, [codeBlockExpander]);

  return <pre {...props} ref={ref} />;
};

export const MDXComponents = {
  p: (props: any) => <Text {...props} as="p" />,
  h1: (props: any) => <Heading {...props} as="h1" />,
  h2: (props: any) => <Heading {...props} as="h2" />,
  h3: (props: any) => <Heading {...props} as="h3" />,
  h4: (props: any) => <Heading {...props} as="h4" />,
  h5: (props: any) => <Heading {...props} as="h5" />,
  h6: (props: any) => <Heading {...props} as="h6" />,
  ul: (props: any) => <ul {...props} style={{ paddingLeft: "1rem" }} />,
  // pre: (props: any) => <Pre {...props} />,
  Tweet: ({ id, ...props }: { id: string }) => (
    <Tweet
      {...props}
      hideConversation
      tweetLink={`anyuser/status/${id}`}
      theme="dark"
      align="center"
    />
  ),
  Youtube: ({ id, ...props }: { id: string }) => (
    <Box marginY="5">
      <YouTube {...props} youTubeId={id} />
    </Box>
  ),
  Viz,
};
