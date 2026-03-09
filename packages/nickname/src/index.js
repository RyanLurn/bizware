import { firstNames } from "./datasets/first-names";
import { adjectives } from "./datasets/adjectives";
import { lastNames } from "./datasets/last-names";
import { nouns } from "./datasets/nouns";
import { getRandomItem } from "./utils";

export function generateNickname() {
  const randomFirstName = getRandomItem(firstNames);
  const randomLastName = getRandomItem(lastNames);
  const randomAdjective = getRandomItem(adjectives);
  const randomNoun = getRandomItem(nouns);

  return `${randomFirstName} ${randomLastName} the ${randomAdjective.charAt(0).toUpperCase() + randomAdjective.slice(1)} ${randomNoun}`;
}
