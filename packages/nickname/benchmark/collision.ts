import { firstNames } from "../src/datasets/first-names";
import { adjectives } from "../src/datasets/adjectives";
import { lastNames } from "../src/datasets/last-names";
import { adverbs } from "../src/datasets/adverbs";
import { nouns } from "../src/datasets/nouns";

/**
 * Calculates the probability of at least one collision
 * given k draws from a space of N possible values.
 * Optionally, rerolls on collision (up to `rerolls` times), accepting the last result.
 */
export function collisionProbability(
  datasetSizes: number[],
  draws: number,
  rerolls: number = 0
): number {
  const N = datasetSizes.reduce((acc, size) => acc * size, 1);
  const p = 1 - Math.exp((-draws * (draws - 1)) / (2 * N));
  return Math.pow(p, rerolls + 1);
}

const numberOfFirstNames = firstNames.length;
const numberOfLastNames = lastNames.length;
const numberOfAdverbs = adverbs.length;
const numberOfAdjectives = adjectives.length;
const numberOfNouns = nouns.length;
const numberOfDraws = 10_000_000;
const numberOfRerolls = 1;

const percentage =
  collisionProbability(
    [
      numberOfFirstNames,
      numberOfLastNames,
      numberOfAdverbs,
      numberOfAdjectives,
      numberOfNouns,
    ],
    numberOfDraws,
    numberOfRerolls
  ) * 100;

console.log("With:");
console.log(`${numberOfFirstNames.toLocaleString()} first names`);
console.log(`${numberOfLastNames.toLocaleString()} last names`);
console.log(`${numberOfAdverbs.toLocaleString()} adverbs`);
console.log(`${numberOfAdjectives.toLocaleString()} adjectives`);
console.log(`${numberOfNouns.toLocaleString()} nouns`);
console.log("And:");
console.log(`${numberOfDraws.toLocaleString()} draws`);
console.log(`${numberOfRerolls} reroll(s) on collision`);
console.log(
  `The probability of at least one collision is: ${percentage.toFixed(2)}%`
);
