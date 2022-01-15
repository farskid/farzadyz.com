import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs/promises";
import path from "path";
import { POSTS_DIR } from "../../src/posts";
import type { Post } from "../../src/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method.toLowerCase()) {
    case "post": {
      try {
        const body = JSON.parse(req.body) as Post;

        await fs.writeFile(
          path.join(POSTS_DIR, body.fileName),
          body.rawContent,
          {
            encoding: "utf-8",
          }
        );

        return res.status(200).json({ status: "updated" });
      } catch (err) {
        res.status(500).json({ status: "error", error: err.toString() });
      }
    }
    case "get": {
      // const postTitle =
    }
    default:
      // Method not allowed
      res.status(405);
  }
}
