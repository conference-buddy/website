// enables our custom setup and teardown for rendering vue components
// see: https://gitlab.com/ryter/ryter/-/blob/master/documentation/frontend/testing/03_tools-and-setup/in-depth/custom-cleanup.adoc#user-content-our-setup-and-teardown-explained
process.env.RTL_SKIP_AUTO_CLEANUP = "true";

module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": `<rootDir>/tests/jest-preprocess.js`,
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.js`,
  },
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`,
  setupFiles: [`<rootDir>/tests/loadershim.js`],
  setupFilesAfterEnv: [`<rootDir>/tests/setup-files.js`],
};
