/**
 * Returns a random element from an array.
 *
 * @param {Array} arr - The array to select a random element from.
 * @returns {*} A random element from the input array.
 *
 * @throws {TypeError} If the input parameter is not an array.
 * @throws {Error} If the input array is empty.
 */
export function getRandomArray(arr: any[]): any {
  if (!Array.isArray(arr)) {
    throw new TypeError('The input parameter must be an array');
  }
  if (arr.length === 0) {
    throw new Error('The input array is empty');
  }
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  return item;
}
