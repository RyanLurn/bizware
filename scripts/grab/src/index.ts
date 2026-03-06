import { parse, join } from "path";
import { $ } from "bun";

import { processFile } from "@/utils/process-file";
import { ROOT_DIR, OUT_DIR } from "@/constants";

console.log("Grabbing files...");

let outputContent = "";

const gitLsFilesOutput = await $`git ls-files`.cwd(ROOT_DIR).text();
const filePaths = gitLsFilesOutput.trim().split("\n");

for (const filePath of filePaths) {
  const path = join(ROOT_DIR, filePath);
  const content = await processFile({
    path,
  });

  outputContent += content;
  outputContent += "\n";
}

await Bun.write(join(OUT_DIR, `${parse(ROOT_DIR).name}.md`), outputContent);

console.log("Done!");
