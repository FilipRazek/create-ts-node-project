#!/usr/bin/env node

import createProject from "./createProject.js";

const outDir = process.argv[2] || ".";
await createProject(outDir);
