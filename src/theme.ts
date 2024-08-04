import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  fonts: {
    heading: "Arial, sans-serif",
    body: "Arial, sans-serif",
  },
  styles: {
    global: {
      "html, body": {
        backgroundColor: "white",
        // make text colour lower contrast to be easier on the eyes
        // color: "gray.300",
        fontWeight: "450",
        // slnt is fix for Safari italicising variable fonts by default
        fontVariationSettings: "'wght' 450, 'slnt' 0",
        color: "black",
      },
      a: {
        color: "black",
        textDecoration: "underline",
        textUnderlineOffset: "0.1em",
        textDecorationThickness: "0.05em",
        textDecorationSkipInk: "skip",
      },
      "a:hover, a:active": {
        color: "black",
      },
      ":focus": {
        outlineColor: "black",
      },
      // make strong and emphasised text slightly brighter
      "strong, b, em, i": {
        color: "black",
        fontSynthesis: "none",
      },
      "strong, b": {
        fontWeight: "600",
        // slnt is fix for Safari italicising variable fonts by default
        fontVariationSettings: "'wght' 600, 'slnt' 0",
      },
      "em, i": {
        fontStyle: "italic",
        fontSynthesis: "none",
        fontVariationSettings: "'slnt' 10",
      },
      "h1, h2, h3, h4, h5, h6": {
        color: "black",
        fontWeight: "500",
        // slnt is fix for Safari italicising variable fonts by default
        fontVariationSettings: "'wght' 500, 'slnt' 0",
      },
    },
  },
  shadows: {
    outline: "0 0 0 3px black",
  },
  colors: {
    gray: {
      "50": "#EFEFF1",
      "100": "#E1E2E5",
      "200": "#C6C7CD",
      "300": "#ABACB5",
      "400": "#8F919D",
      "500": "#757785",
      "600": "#5D5F6A",
      "700": "#45464F",
      "800": "#2D2E34",
      "900": "#151618",
    },
  },
});
export default theme;
