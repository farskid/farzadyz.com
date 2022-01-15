import React from "react";
import dayjs from "dayjs";
import { EmbedProps, Post } from "./types";
import { Remarkable } from "remarkable";
import { sortBy } from "lodash";

export function createRequiredContext<T>(displayName: string) {
  const context = React.createContext<T | null>(null);
  context.displayName = displayName;

  const useContext = () => {
    const ctx = React.useContext(context);
    if (!ctx) {
      throw new Error(
        `use${displayName} must be used inside ${displayName}Provider`
      );
    }
    return ctx;
  };

  return [context.Provider, useContext] as const;
}

export const groupPostsByCategory = (posts: Post[]): Record<string, Post[]> => {
  posts.forEach((p) => {
    p.category = p.category ?? "";
  });
  return posts.reduce<Record<string, Post[]>>((group, post) => {
    return {
      ...group,
      // at this point, category is an empty string if not present
      [post.category!]: group[post.category!]
        ? group[post.category!].concat(post)
        : [post],
    };
  }, {});
};

/**
 *
 * Returns a hash code for a string.
 * (Compatible to Java's String.hashCode())
 *
 * The hash code for a string object is computed as
 *     s[0]*31^(n-1) + s[1]*31^(n-2) + ... + s[n-1]
 * using number arithmetic, where s[i] is the i th character
 * of the given string, n is the length of the string,
 * and ^ indicates exponentiation.
 * (The hash value of the empty string is zero.)
 *
 */
export const stringHashCode = (str: string): number => {
  for (var i = 0, h = 0; i < str.length; i++)
    h = (Math.imul(31, h) + str.charCodeAt(i)) | 0;
  return h;
};

export const toUrl = (str: string): string => encodeURIComponent(str);

// TODO: replace with package `github-sluggify`
export const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const makeEmbedUrl = (id: string, embedProps: EmbedProps): string => {
  const url = new URL(`https://stately.ai/viz/embed/${id}`);
  Object.entries(embedProps).forEach(([key, value]) => {
    url.searchParams.set(key, value.toString());
  });
  return url.toString();
};

export const formatDate = (dateString: string): string => {
  return dayjs(dateString).format("MMMM D, YYYY");
};

export const createMarkdownParser: () => Remarkable = () => {
  return new Remarkable("full", {
    html: true,
    breaks: true,
    linkify: true,
    linkTarget: "_blank",
    typographer: true,
  });
};

export function sortByPublishedDateDesc(posts: Post[]) {
  return posts.sort((a, b) => {
    const aDate = new Date((a as Post).publishedAt).getTime();
    const bDate = new Date((b as Post).publishedAt).getTime();
    return bDate - aDate;
  });
}

export function sortPostsByLatest(posts: Post[], drafsFirst: boolean) {
  let draftPosts = [] as Post[],
    publishedPosts = [] as Post[];

  posts.forEach((post) => {
    if (post.draft) {
      draftPosts.push(post);
    } else {
      publishedPosts.push(post);
    }
  });

  const allPosts = drafsFirst
    ? sortByPublishedDateDesc(draftPosts).concat(
        sortByPublishedDateDesc(publishedPosts)
      )
    : sortByPublishedDateDesc(publishedPosts).concat(sortBy(draftPosts));

  return allPosts;
}
