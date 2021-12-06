import { NextSeo } from "next-seo";
import React, { useMemo } from "react";
import { useMetadata } from "./MetadataContext";
import { SeoOverrides } from "./types";

export const Seo: React.FC<SeoOverrides> = (props) => {
  const metadata = useMetadata();
  const title =
    typeof props.title === "function"
      ? props.title(metadata.default.title!)
      : typeof props.title === "string"
      ? props.title
      : metadata.default.title;
  const overrideMetadata = useMemo(
    () => metadata.makeMetadata({ ...props, title }),
    [metadata, props, title]
  );
  return <NextSeo {...overrideMetadata} />;
};
