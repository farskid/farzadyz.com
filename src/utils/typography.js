import Typography from "typography";

const defaultFontFamilies = [
  "-apple-system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Roboto",
  "Oxygen",
  "Ubuntu",
  "Cantarell",
  "Open Sans",
  "Helvetica Neue",
  "sans-serif"
];

const typo = new Typography({
  headerFontFamily: ["IBM Plex Serif", ...defaultFontFamilies],
  bodyFontFamily: ["IBM Plex Sans", ...defaultFontFamilies],
  baseFontSize: 16,
  baseLineHeight: 1.5
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typo.injectStyles();
}

export default typo;
export const rhythm = typo.rhythm;
export const scale = typo.scale;
