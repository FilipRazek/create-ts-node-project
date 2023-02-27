import path from "path";
import { readFile } from "fs/promises";
import { TEST_OUTPUT_DIR } from "../jest.setup";
import createGitignore, { GIT_IGNORED_PATHS } from "./createGitignore";

describe("createGitignore", () => {
  it("should create a basic .gitignore", async () => {
    const fileName = ".gitignore";
    const filePath = path.join(TEST_OUTPUT_DIR, fileName);

    await createGitignore(TEST_OUTPUT_DIR);

    const expectedString = GIT_IGNORED_PATHS.join("\n") + "\n";
    const fileData = await readFile(filePath, "utf-8");
    expect(fileData).toBe(expectedString);
  });
});
