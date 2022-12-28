"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomArray = void 0;
/**
 * Returns a random element from an array.
 *
 * @param {Array} arr - The array to select a random element from.
 * @returns {*} A random element from the input array.
 *
 * @throws {TypeError} If the input parameter is not an array.
 * @throws {Error} If the input array is empty.
 */
function getRandomArray(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('The input parameter must be an array');
    }
    if (arr.length === 0) {
        throw new Error('The input array is empty');
    }
    var randomIndex = Math.floor(Math.random() * arr.length);
    var item = arr[randomIndex];
    return item;
}
exports.getRandomArray = getRandomArray;
