export default {
  preset: "ts-jest",
  // match only files with .test.ts or .spec.ts extension
  testRegex: "\\.(test|spec)\\.ts$",
  testPathIgnorePatterns: ["expected_output", "node_modules"],
  moduleNameMapper: {
    "(.+)\\.js": "$1",
  },
  globalSetup: "./jest.setup.ts",
};
