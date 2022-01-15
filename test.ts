const fs = require("fs/promises");
const matter = require("gray-matter");
const path = require("path");
const uuid = require("uuid");

(async function main() {
  const POSTS_DIR = path.join(process.cwd(), "content/posts");
  const names = await fs.readdir(POSTS_DIR);
  for (let n of names) {
    const post = (await fs.readFile(path.join(POSTS_DIR, n))).toString();
    const m = matter(post);
    m.data.id = uuid.v4();
    await fs.writeFile(path.join(POSTS_DIR, n), m.stringify(), {
      encoding: "utf-8",
    });
  }
})();
