import path from "path";
import { writeFile } from "fs/promises";

export const GIT_IGNORED_PATHS = ["node_modules/"];

export default async (outDir: string) => {
  const FILE_NAME = ".gitignore";
  const filePath = path.join(outDir, FILE_NAME);

  const fileData = GIT_IGNORED_PATHS.join("\n") + "\n";
  await writeFile(filePath, fileData);
};
