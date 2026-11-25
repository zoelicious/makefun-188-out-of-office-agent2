import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const text = "Out of office. I left my brain on airplane mode. It is enjoying the silence.";
const baseDir = fileURLToPath(new URL(".", import.meta.url));
const outDirRaw = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outDir = path.isAbsolute(outDirRaw) ? outDirRaw : path.resolve(baseDir, outDirRaw);
mkdirSync(outDir, { recursive: true });
writeFileSync(path.join(outDir, "entry.txt"), text, "utf8");
