import path from "path";
import { mkdir } from "fs/promises";
import { existsSync } from "fs";
import initGit from "git-init";
import createGitignore from "./src/createGitignore.js";
import createHelpersFile from "./src/createHelpersFile.js";
import createHelpersTest from "./src/createHelpersTest.js";
import createIndexFile from "./src/createIndexFile.js";
import createPackageFile from "./src/createPackageFile.js";
import createTsConfig from "./src/createTsConfig.js";
import createJestConfig from "./src/createJestConfig.js";

export default async (outDir: string) => {
  if (!existsSync(outDir)) {
    await mkdir(outDir);
  }

  console.log("Creating project files 🚀");
  await createTsConfig(outDir);
  await createPackageFile(outDir);
  await createGitignore(outDir);
  await createJestConfig(outDir);

  console.log("Creating src folder 🔥");
  // Create the src folder
  const folderPath = path.join(outDir, "src");
  if (!existsSync(folderPath)) {
    await mkdir(folderPath);
  }

  await createIndexFile(outDir);
  await createHelpersFile(outDir);
  await createHelpersTest(outDir);

  console.log("Initializing git repository ⚡️");
  await initGit(".");

  console.log("Done! 🎉");
};
