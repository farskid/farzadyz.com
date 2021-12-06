import { NextSeoProps } from "next-seo";

export interface PostFrontmatter {
  title: string;
  description: string;
  tags: string[];
  category?: string; // TODO: make this a union
  author: string;
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  originalURL?: string;
  draft?: boolean;
}

export interface Post extends PostFrontmatter {
  slug: string;
  content: string;
  fileName: string;
}

export type Social = Record<
  "twitter" | "github" | "stackoverflow" | "medium" | "linkedin",
  { link: string }
>;

interface OtherInfo {
  fullname: string;
  social: {
    twitter: {
      handle: string;
      link: string;
    };
    github: {
      username: string;
      link: string;
    };
    linkedin: {
      link: string;
    };
    medium: { link: string };
    stackoverflow: { link: string };
  };
}

export type Metadata = Pick<
  NextSeoProps,
  "title" | "description" | "canonical" | "openGraph" | "twitter"
> &
  OtherInfo;

type OpenGraphArticle = NonNullable<
  NonNullable<NextSeoProps["openGraph"]>["article"]
>;

export type MetadataOverrides = Partial<{
  title: string;
  description: string;
  url: string;
  article: OpenGraphArticle;
  originalURL: string;
}>;

export type EmbedMode = "viz" | "panels" | "full";

export type EmbedPanel = "code" | "state" | "events" | "actors" | "settings";

export interface EmbedProps {
  mode: EmbedMode;
  panel: EmbedPanel;
  showOriginalLink: 0 | 1;
  readOnly: 0 | 1;
  pan: 0 | 1;
  zoom: 0 | 1;
  controls: 0 | 1;
}

type Prop<T, K> = K extends keyof T ? T[K] : never;
export type GetNonNullableDeep<T, Path> = Path extends []
  ? T
  : Path extends [infer Head, ...infer Tail]
  ? GetNonNullableDeep<NonNullable<Prop<T, Head>>, Tail>
  : never;
