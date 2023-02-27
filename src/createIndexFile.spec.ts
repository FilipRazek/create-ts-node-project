import path from "path";
import { readFile } from "fs/promises";
import { TEST_OUTPUT_DIR } from "../jest.setup";
import createIndexFile, { INDEX_CODE } from "./createIndexFile";

describe("createIndexFile", () => {
  it("should create the index file", async () => {
    const fileDir = "src";
    const fileName = "index.ts";
    const filePath = path.join(TEST_OUTPUT_DIR, fileDir, fileName);

    await createIndexFile(TEST_OUTPUT_DIR);

    const fileData = await readFile(filePath, "utf-8");
    expect(fileData).toBe(INDEX_CODE);
  });
});
