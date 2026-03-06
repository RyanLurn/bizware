import { parse } from "path";

import { formatOutput } from "@/utils/format-output";

const ignoredBases = ["routeTree.gen.ts"];
const ignoredExts = [".lock", ".svg"];

export async function processFile({ path }: { path: string }) {
  const parsedPath = parse(path);
  const ext = parsedPath.ext;

  let content: string;
  if (ignoredExts.includes(ext) || ignoredBases.includes(parsedPath.base)) {
    content = "[SKIPPED]";
  } else {
    content = await Bun.file(path).text();
  }

  const formattedOutput = formatOutput({
    content,
    path,
    ext,
  });

  return formattedOutput;
}
