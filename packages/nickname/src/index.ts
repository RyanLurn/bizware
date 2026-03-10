import { capitalizeFirstLetter, getRandomItem } from "@/utils";
import { firstNames } from "@/datasets/first-names";
import { adjectives } from "@/datasets/adjectives";
import { lastNames } from "@/datasets/last-names";
import { nouns } from "@/datasets/nouns";

export function generateNickname() {
  const randomFirstName = getRandomItem(firstNames);
  const randomLastName = getRandomItem(lastNames);
  const randomAdjective = capitalizeFirstLetter(getRandomItem(adjectives));
  const randomNoun = capitalizeFirstLetter(getRandomItem(nouns));

  return `${randomFirstName} ${randomLastName} the ${randomAdjective} ${randomNoun}`;
}
