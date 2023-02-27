import { writeFile } from "fs/promises";

/**
 * A small util to write a JSON object to a file.
 * Automatically uses spaces for indentation
 * and adds a new line at the end of the file.
 */
export default async (
  filePath: string,
  jsonData: object,
  indentationSpaces = 2
) => {
  const fileData = JSON.stringify(jsonData, null, indentationSpaces) + "\n";
  await writeFile(filePath, fileData);
};
