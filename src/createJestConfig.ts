import path from "path";
import { writeFile } from "fs/promises";

export const JEST_CONFIG_CODE = `export default {
  preset: "ts-jest",
  // match only files with .test.ts or .spec.ts extension
  testRegex: "\\.(test|spec)\\.ts$",
  testPathIgnorePatterns: ["node_modules"],
  moduleNameMapper: {
    "^(.+)\\.js$": ["$1.js", "$1.ts"],
    "^(.+)\\.json$": ["$1.json"],
  },
};
`;

export default async (outDir: string) => {
  const FILE_NAME = "jest.config.ts";
  const filePath = path.join(outDir, FILE_NAME);

  await writeFile(filePath, JEST_CONFIG_CODE);
};
