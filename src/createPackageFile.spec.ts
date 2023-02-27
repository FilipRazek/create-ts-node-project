import path from "path";
import { readFile } from "fs/promises";
import { TEST_OUTPUT_DIR } from "../jest.setup";
import createPackageFile, { PACKAGE_JSON } from "./createPackageFile";

describe("createPackageFile", () => {
  it("should write a package.json to a file", async () => {
    const fileName = "package.json";
    const filePath = path.join(TEST_OUTPUT_DIR, fileName);

    await createPackageFile(TEST_OUTPUT_DIR);

    const expectedString = JSON.stringify(PACKAGE_JSON, null, 2) + "\n";
    const fileData = await readFile(filePath, "utf-8");
    expect(fileData).toBe(expectedString);
  });
});
