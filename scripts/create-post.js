const fs = require("fs");
const path = require("path");
const { URL } = require("url");
const inquirer = require("inquirer");
const chalk = require("chalk");
const uuid = require("uuid");

/**
 * Utility script that helps scaffold a post.
 * Asks about:
 *  - title
 *  - slug
 *  - tags
 *
 * Auto generates id and date.
 */
async function main() {
  let post;

  const { title, slug, tags, publish } = await inquirer.prompt([
    {
      type: "input",
      message: `What is the title of the post?\n${chalk.gray(
        "(e.g. CSS Grid in production)\n>"
      )}`,
      name: "title",
      validate: input => !!input || "Title is required."
    },
    {
      type: "input",
      message: `What is the slug for the URL?\n${chalk.gray(
        "(e.g. css-grid-in-production)\n>"
      )}`,
      name: "slug",
      validate: input => !!input || "Slug is required."
    },
    {
      type: "input",
      name: "tags",
      message: `What are the tags for this post?\n${chalk.gray(
        "(e.g. react, javascript)"
      )}`,
      validate: input => !!input || "tags are required."
    }
  ]);

  // Make the post
  console.log(chalk.gray`Bootstrapping your blogpost...`);

  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const formattedDate = `${year}-${month}-${day}`;
  const id = uuid.v4();

  const postContent = `---
title: '${title}'
slug: '${slug}'
id: '${id}'
date: '${formattedDate}'
tags: '${tags}'
---

`;

  const postRelativePath = path.join("content", "blog", `${slug}`, "index.md");
  const postPath = path.resolve(process.cwd(), postRelativePath);
  if (!fs.existsSync(postPath)) {
    fs.mkdirSync(path.join("content", "blog", `${slug}`));
  }
  fs.writeFileSync(postPath, postContent);

  console.log(
    `Done! You can edit ${chalk.cyan(
      postRelativePath
    )} to double-check or add a description.`
  );
}

main();
