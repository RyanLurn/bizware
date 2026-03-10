import { heapStats } from "bun:jsc";

import { generateNickname } from "@/index";

const startHeapSize = heapStats().heapSize;

const nickname = generateNickname();
console.log(`Generated nickname: ${nickname}`);

const endHeapSize = heapStats().heapSize;

const usedHeap = endHeapSize - startHeapSize;
console.log(`Memory usage: ${usedHeap} bytes`);
