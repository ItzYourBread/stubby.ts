"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toSmallNumber = void 0;
var numbers = ['⁰', '¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹'];
/**
 * Converts a number to a small number representation using superscript digits.
 *
 * @param {number} count - The number to convert.
 * @param {number} digits - The number of digits to use in the small number representation.
 * @returns {string} The small number representation of the input number.
 *
 * @throws {TypeError} If any of the input parameters is not a positive integer.
 */
function toSmallNumber(count, digits) {
    if (!Number.isInteger(count) ||
        !Number.isInteger(digits) ||
        count < 0 ||
        digits < 0) {
        throw new TypeError('The input parameters must be positive integers');
    }
    var result = '';
    var num = count;
    var i = 0;
    for (i = 0; i < digits; i++) {
        var digit = count % 10;
        count = Math.trunc(count / 10);
        result = numbers[digit] + result;
    }
    return result;
}
exports.toSmallNumber = toSmallNumber;
