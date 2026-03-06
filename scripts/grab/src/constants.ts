import { join } from "path";

export const DIR_WORD = process.platform === "win32" ? "folder" : "directory";
export const OUT_DIR = join(import.meta.dir, "..", "grabbed");
export const ROOT_DIR = "D:\\Ryan Luong\\dev\\bizware";
