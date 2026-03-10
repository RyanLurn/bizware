import { occupations } from "@/datasets/nouns/occupations";
import { gemstones } from "@/datasets/nouns/gemstones";
import { animals } from "@/datasets/nouns/animals";
import { flowers } from "@/datasets/nouns/flowers";
import { weapons } from "@/datasets/nouns/weapons";
import { metals } from "@/datasets/nouns/metals";

export const nouns = [
  ...animals,
  ...flowers,
  ...weapons,
  ...occupations,
  ...gemstones,
  ...metals,
];
