import {
  femaleFirstNames,
  maleFirstNames,
  firstNames,
} from "@/datasets/first-names";
import { adjectives } from "@/datasets/adjectives";
import { lastNames } from "@/datasets/last-names";
import { nouns } from "@/datasets/nouns";

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
const numberOfAdjectives = adjectives.length;
const numberOfNouns = nouns.length;
const numberOfDadName = maleFirstNames.length;
const numberOfMomName = femaleFirstNames.length;
const numberOfDraws = 100_000_000;
const numberOfRerolls = 0;

const percentage =
  collisionProbability(
    [
      numberOfFirstNames,
      numberOfLastNames,
      numberOfAdjectives,
      numberOfNouns,
      numberOfDadName,
      numberOfMomName,
    ],
    numberOfDraws,
    numberOfRerolls
  ) * 100;

console.log("With:");
console.log(`${numberOfFirstNames.toLocaleString()} first names`);
console.log(`${numberOfLastNames.toLocaleString()} last names`);
console.log(`${numberOfAdjectives.toLocaleString()} adjectives`);
console.log(`${numberOfNouns.toLocaleString()} nouns`);
console.log(`${numberOfDadName.toLocaleString()} dad names`);
console.log(`${numberOfMomName.toLocaleString()} mom names`);
console.log("And:");
console.log(`${numberOfDraws.toLocaleString()} draws`);
console.log(`${numberOfRerolls} reroll(s) on collision`);
console.log(
  `The probability of at least one collision is: ${percentage.toFixed(3)}%`
);
