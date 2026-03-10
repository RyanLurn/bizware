import { generateNickname } from "../src";

const runs = 100;
const times = 1_000_000;

const collisions = {
  under100k: 0,
  under10k: 0,
  under1k: 0,
  under1m: 0,
  total: 0,
};

const startTime = Bun.nanoseconds();
for (let runIndex = 0; runIndex < runs; runIndex++) {
  if (runIndex % (runs / 10) === 0) {
    console.log(`Run ${runIndex}/${runs}`);
  }

  const nicknames = new Set<string>();

  for (let timeIndex = 0; timeIndex < times; timeIndex++) {
    const nickname = generateNickname();

    if (nicknames.has(nickname)) {
      collisions.total++;

      if (timeIndex < 1_000) {
        collisions.under1k++;
      }

      if (timeIndex < 10_000) {
        collisions.under10k++;
      }

      if (timeIndex < 100_000) {
        collisions.under100k++;
      }

      if (timeIndex < 1_000_000) {
        collisions.under1m++;
      }

      break;
    }

    nicknames.add(nickname);
  }
}
const endTime = Bun.nanoseconds();

console.log(`Done in ${(endTime - startTime) / 1_000_000_000} seconds.`);

for (const [key, value] of Object.entries(collisions)) {
  const chance = (value / runs) * 100;
  console.log(`Chance of collision in ${key}: ${chance.toFixed(2)}%`);
}
