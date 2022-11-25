"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomArray = exports.RandomNumber = void 0;
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
