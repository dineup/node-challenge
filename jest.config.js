module.exports = {
  testEnvironment: "node",
  moduleFileExtensions: ["json", "js"],
  modulePaths: ["src"],
  testRunner: "jest-circus/runner",
  testTimeout: 5000,
  clearMocks: true,
  watchPathIgnorePatterns: ["/\\.#.*", "/.*~", "/#.*#"],
};
