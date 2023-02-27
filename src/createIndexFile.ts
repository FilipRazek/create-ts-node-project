import path from "path";
import { writeFile } from "fs/promises";

export const INDEX_CODE = `import { concat } from "./helpers.js";

console.log(concat("Hello", "World"));
`;

export default async (outDir: string) => {
  const FILE_DIR = "src";
  const FILE_NAME = "index.ts";
  const filePath = path.join(outDir, FILE_DIR, FILE_NAME);

  await writeFile(filePath, INDEX_CODE);
};
