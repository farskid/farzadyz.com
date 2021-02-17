const SimpleGit = require("simple-git/promise");

const repo = SimpleGit();

module.exports = async function (fileAbsolutePath) {
  const log = await repo.log({
    file: fileAbsolutePath,
    n: 1,
    // Git pretty log formats: https://git-scm.com/docs/pretty-formats#Documentation/pretty-formats.txt-emasem
    format: {
      date: `%ar`, // Author date, relative
      authorName: `%an`, // Author name
      authorEmail: "%ae", // Author email
    },
  });
  return log.latest.date;
};
