"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomArray = void 0;
function getRandomArray(arr) {
    var randomIndex = Math.floor(Math.random() * arr.length);
    var item = arr[randomIndex];
    return item;
}
exports.getRandomArray = getRandomArray;
