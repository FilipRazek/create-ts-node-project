import path from "path";
import { mkdir } from "fs/promises";
import { existsSync } from "fs";

// Create the output directory for all tests
export const TEST_OUTPUT_DIR = path.join(__dirname, "test_output");

export default async () => {
  if (!existsSync(TEST_OUTPUT_DIR)) {
    await mkdir(TEST_OUTPUT_DIR);
  }

  // Create the src folder
  const FOLDER_NAME = "src";
  const folderPath = path.join(TEST_OUTPUT_DIR, FOLDER_NAME);

  if (!existsSync(folderPath)) {
    await mkdir(folderPath);
  }
};
