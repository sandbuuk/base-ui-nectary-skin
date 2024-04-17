const { readdirSync } = require("node:fs");

const PACKAGES_FOLDER = "./packages/";

const packageDirectories = readdirSync(PACKAGES_FOLDER, {
  withFileTypes: true,
  encoding: "utf8",
})
  .filter((x) => x.isDirectory())
  .map(({ name }) => name)
  .concat("repo");

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-enum": [2, "always", packageDirectories],
    "scope-empty": [2, "never"],
  },
};
