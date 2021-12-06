import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head />
        <body>
          <Main />
          {process.env.NODE_ENV !== "production" && <NextScript />}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
