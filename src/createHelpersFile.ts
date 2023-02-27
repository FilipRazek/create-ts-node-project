import path from "path";
import { writeFile } from "fs/promises";

export const HELPERS_CODE = `export const concat = (a: string, b: string) => \`\${a} \${b}\`;
`;

export default async (outDir: string) => {
  const FILE_DIR = "src";
  const FILE_NAME = "helpers.ts";
  const filePath = path.join(outDir, FILE_DIR, FILE_NAME);

  await writeFile(filePath, HELPERS_CODE);
};
