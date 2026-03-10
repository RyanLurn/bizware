/**
 * @template T
 * @param {T[]} array
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

/**
 * @param {string} word
 * @returns {string}
 */
export function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
