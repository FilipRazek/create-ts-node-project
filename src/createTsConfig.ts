import path from "path";
import writeJsonToFile from "./writeJsonToFile.js";

export const TS_CONFIG_JSON = {
  compilerOptions: {
    target: "ES2017",
    module: "ES2022",
    moduleResolution: "node",
    esModuleInterop: true,
  },
  "ts-node": {
    esm: true,
  },
};

export default async (outDir: string) => {
  const FILE_NAME = "tsconfig.json";
  const filePath = path.join(outDir, FILE_NAME);

  await writeJsonToFile(filePath, TS_CONFIG_JSON, 2);
};
