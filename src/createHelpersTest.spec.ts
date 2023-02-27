import path from "path";
import { readFile } from "fs/promises";
import { TEST_OUTPUT_DIR } from "../jest.setup";
import createHelpersTest, { HELPERS_TEST_CODE } from "./createHelpersTest";

describe("createHelpersTest", () => {
  it("should create the helpers spec", async () => {
    const fileDir = "src";
    const fileName = "helpers.spec.ts";
    const filePath = path.join(TEST_OUTPUT_DIR, fileDir, fileName);

    await createHelpersTest(TEST_OUTPUT_DIR);

    const fileData = await readFile(filePath, "utf-8");
    expect(fileData).toBe(HELPERS_TEST_CODE);
  });
});
