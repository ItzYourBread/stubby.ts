/**
 * Returns a random number between two numbers (inclusive).
 *
 * @param {number} min - The minimum number.
 * @param {number} max - The maximum number.
 * @returns {number} A random number between the minimum and maximum numbers (inclusive).
 *
 * @throws {TypeError} If any of the input parameters is not a number.
 * @throws {RangeError} If the minimum number is greater than the maximum number.
 */
export function getRandomNumber(min: number, max: number): number {
    if (typeof min !== 'number' || typeof max !== 'number') {
        throw new TypeError('The input parameters must be numbers');
    }
    if (min > max) {
        throw new RangeError(
            'The minimum number must be less than or equal to the maximum number'
        );
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
