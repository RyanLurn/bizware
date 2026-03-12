/**
 * @template T
 * @param {[T, ...T[]]} array
 * @returns {T}
 */
export function getRandomItem(array) {
  const index = Math.floor(Math.random() * array.length);
  const item = array[index];

  // Assertion to make TypeScript happy but it should never happen
  if (item === undefined) {
    throw new Error("Array must not be empty");
  }

  return item;
}
