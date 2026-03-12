/**
 * @template T
 * @param {[T, ...T[]]} array
 * @returns {T}
 */
export function getRandomItem(array) {
  const index = Math.floor(Math.random() * array.length);
  const item = array[index];
  // @ts-expect-error - TypeScript can't infer the logic
  return item;
}
