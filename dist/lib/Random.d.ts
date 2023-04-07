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
export declare function Random(input: any, max?: number): any;
