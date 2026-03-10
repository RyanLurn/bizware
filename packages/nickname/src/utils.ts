export function getRandomItem<T>(array: T[]) {
  const index = Math.floor(Math.random() * array.length);
  const item = array[index];

  // Assertion to make TypeScript happy but it should never happen
  if (item === undefined) {
    throw new Error("Array must not be empty");
  }

  return item;
}

export function capitalizeFirstLetter(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
