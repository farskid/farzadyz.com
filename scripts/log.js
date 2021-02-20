const chalk = require("chalk");

const logLevelToChalkColors = {
  error: chalk.red,
  log: chalk.white,
  info: chalk.blueBright,
};

// Programmatically generate log methods based on the level to color config above ^
const logger = Object.entries(logLevelToChalkColors).reduce(
  (logger, [level, colorMethod]) => {
    return {
      ...logger,
      [level](...args) {
        console.log(colorMethod(...args));
      },
    };
  },
  {}
);

module.exports = logger;
