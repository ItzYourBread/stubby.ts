"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmallNumber = exports.RandomArray = exports.RandomNumber = void 0;
/**
 * @param - first value is minimum ans second value is maximum.
 **/
var getRandomNumber_1 = require("./lib/getRandomNumber");
Object.defineProperty(exports, "RandomNumber", { enumerable: true, get: function () { return getRandomNumber_1.getRandomNumber; } });
/**
 * @object - the array object.
 **/
var getRandomArray_1 = require("./lib/getRandomArray");
Object.defineProperty(exports, "RandomArray", { enumerable: true, get: function () { return getRandomArray_1.getRandomArray; } });
/**
 * @param - first value is count and second value is digits
 **/
var toSmallNumber_1 = require("./lib/toSmallNumber");
Object.defineProperty(exports, "SmallNumber", { enumerable: true, get: function () { return toSmallNumber_1.toSmallNumber; } });
exports.default = {
    RandomNumber: getRandomNumber_1.getRandomNumber,
    RandomArray: getRandomArray_1.getRandomArray,
    SmallNumber: toSmallNumber_1.toSmallNumber,
};
