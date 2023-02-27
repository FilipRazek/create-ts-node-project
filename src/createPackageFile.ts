import path from "path";
import writeJsonToFile from "./writeJsonToFile.js";

export const PACKAGE_JSON = {
  name: "my-ts-app",
  version: "1.0.0",
  description: "Created with ts-node-init",
  type: "module",
  scripts: {
    start: "ts-node src/index.ts",
    test: "jest",
  },
  author: "",
  license: "ISC",
  dependencies: {
    "ts-jest": "^29.0.5",
    "ts-node": "^10.9.1",
  },
  devDependencies: {
    "@types/jest": "^29.4.0",
  },
};

export default async (outDir: string) => {
  const FILE_NAME = "package.json";
  const filePath = path.join(outDir, FILE_NAME);

  await writeJsonToFile(filePath, PACKAGE_JSON, 2);
};
