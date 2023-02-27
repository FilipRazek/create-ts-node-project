import path from "path";
import { readFile } from "fs/promises";
import { TEST_OUTPUT_DIR } from "../jest.setup";
import createJestConfig, { JEST_CONFIG_CODE } from "./createJestConfig";

describe("createJestConfig", () => {
  it("should create the jest config file", async () => {
    const fileName = "jest.config.ts";
    const filePath = path.join(TEST_OUTPUT_DIR, fileName);

    await createJestConfig(TEST_OUTPUT_DIR);

    const fileData = await readFile(filePath, "utf-8");
    expect(fileData).toBe(JEST_CONFIG_CODE);
  });
});
