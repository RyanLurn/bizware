import { femaleFirstNames, maleFirstNames } from "@/datasets/first-names";
import { capitalizeFirstLetter, getRandomItem } from "@/utils";
import { adjectives } from "@/datasets/adjectives";
import { lastNames } from "@/datasets/last-names";
import { nouns } from "@/datasets/nouns";

export function generateNickname() {
  const gender = Math.random() > 0.5 ? "male" : "female";
  const randomFirstName = getRandomItem(
    gender === "male" ? maleFirstNames : femaleFirstNames
  );
  const randomLastName = getRandomItem(lastNames);
  const randomAdjective = capitalizeFirstLetter(getRandomItem(adjectives));
  const randomNoun = capitalizeFirstLetter(getRandomItem(nouns));
  const randomDadName = getRandomItem(maleFirstNames);
  const randomMomName = getRandomItem(femaleFirstNames);

  return `${randomFirstName} ${randomLastName} the ${randomAdjective} ${randomNoun}, ${gender === "male" ? "son" : "daughter"} of ${randomDadName} and ${randomMomName}`;
}
