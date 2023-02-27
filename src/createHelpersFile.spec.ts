import path from "path";
import { readFile } from "fs/promises";
import { TEST_OUTPUT_DIR } from "../jest.setup";
import createHelpersFile, { HELPERS_CODE } from "./createHelpersFile";

describe("createHelpersFile", () => {
  it("should create the helpers file", async () => {
    const fileDir = "src";
    const fileName = "helpers.ts";
    const filePath = path.join(TEST_OUTPUT_DIR, fileDir, fileName);

    await createHelpersFile(TEST_OUTPUT_DIR);

    const fileData = await readFile(filePath, "utf-8");
    expect(fileData).toBe(HELPERS_CODE);
  });
});
