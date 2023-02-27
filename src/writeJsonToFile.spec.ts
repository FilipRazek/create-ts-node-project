import path from "path";
import { readFile } from "fs/promises";
import writeJsonToFile from "./writeJsonToFile";
import { TEST_OUTPUT_DIR } from "../jest.setup";

describe("writeJsonToFile", () => {
  it("should write a JSON object to file", async () => {
    const fileName = "write-json-to-file.json";
    const filePath = path.join(TEST_OUTPUT_DIR, fileName);
    const testJson = {
      name: "John",
      age: 43,
    };

    await writeJsonToFile(filePath, testJson, 2);

    const expectedString = JSON.stringify(testJson, null, 2) + "\n";
    const fileData = await readFile(filePath, "utf-8");
    expect(fileData).toBe(expectedString);
  });
});
