import { firstNames } from "./datasets/first-names";
import { adjectives } from "./datasets/adjectives";
import { lastNames } from "./datasets/last-names";
import { adverbs } from "./datasets/adverbs";
import { nouns } from "./datasets/nouns";
import { getRandomItem } from "./utils";

export function generateNickname() {
  const randomFirstName = getRandomItem(firstNames);
  const randomLastName = getRandomItem(lastNames);
  const randomAdverb = getRandomItem(adverbs);
  const randomAdjective = getRandomItem(adjectives);
  const randomNoun = getRandomItem(nouns);

  return `${randomFirstName} ${randomLastName} the ${randomAdverb} ${randomAdjective.charAt(0).toUpperCase() + randomAdjective.slice(1)} ${randomNoun.charAt(0).toUpperCase() + randomNoun.slice(1)}`;
}
