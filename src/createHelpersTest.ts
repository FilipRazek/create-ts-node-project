import path from "path";
import { writeFile } from "fs/promises";

export const HELPERS_TEST_CODE = `import { concat } from "./helpers";

describe("concat", () => {
  it("should concatenate its arguments", () => {
    const concatenatedString = concat("Hello", "World");
    expect(concatenatedString).toBe("Hello World");
  });
});
`;

export default async (outDir: string) => {
  const FILE_DIR = "src";
  const FILE_NAME = "helpers.spec.ts";
  const filePath = path.join(outDir, FILE_DIR, FILE_NAME);

  await writeFile(filePath, HELPERS_TEST_CODE);
};
