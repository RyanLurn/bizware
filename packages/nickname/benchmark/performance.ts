import { generateNickname } from "@/index";

const startTime = Bun.nanoseconds();

const nickname = generateNickname();
console.log(`Generated nickname: ${nickname}`);

const endTime = Bun.nanoseconds();

const duration = (endTime - startTime) / 1_000_000;
console.log(`Time taken: ${duration.toFixed(3)} milliseconds.`);
