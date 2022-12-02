"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toSmallNumber = void 0;
var numbers = ['⁰', '¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹'];
function toSmallNumber(count, digits) {
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
