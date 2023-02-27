import path from "path";
import { readFile } from "fs/promises";
import createTsConfig, { TS_CONFIG_JSON } from "./createTsConfig";
import { TEST_OUTPUT_DIR } from "../jest.setup";

describe("createTsConfig", () => {
  it("should write a default TS config to a file", async () => {
    const fileName = "tsconfig.json";
    const filePath = path.join(TEST_OUTPUT_DIR, fileName);

    await createTsConfig(TEST_OUTPUT_DIR);

    const expectedString = JSON.stringify(TS_CONFIG_JSON, null, 2) + "\n";
    const fileData = await readFile(filePath, "utf-8");
    expect(fileData).toBe(expectedString);
  });
});
