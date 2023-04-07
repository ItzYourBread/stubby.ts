/**
 * Returns a random element from an array or a random number between the given minimum and maximum values.
 *
 * @param {Array | number} input - The array to select a random element from or the minimum value if the second parameter is provided.
 * @param {number} [max] - The maximum value to generate a random number. If this parameter is omitted, the first parameter must be an array.
 * @returns {*} A random element from the input array or a random number between the given minimum and maximum values.
 *
 * @throws {TypeError} If the input parameter is not an array or a number.
 * @throws {Error} If the input array is empty.
 */
export function Random(input: any, max?: number): any {
  if (typeof input === 'number') {
    if (typeof max === 'number') {
      return Math.floor(Math.random() * (max - input + 1)) + input;
    }
    throw new Error('The maximum value must be provided');
  }

  if (Array.isArray(input)) {
    if (input.length === 0) {
      throw new Error('The input array is empty');
    }
    const randomIndex = Math.floor(Math.random() * input.length);
    return input[randomIndex];
  }

  throw new TypeError('The input parameter must be an array or a number');
}

