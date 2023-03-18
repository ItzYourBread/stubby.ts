"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Replace = exports.SystemInfo = exports.SmallNumber = exports.RandomArray = exports.RandomNumber = void 0;
var getRandomNumber_1 = require("./lib/getRandomNumber");
Object.defineProperty(exports, "RandomNumber", { enumerable: true, get: function () { return getRandomNumber_1.getRandomNumber; } });
var getRandomArray_1 = require("./lib/getRandomArray");
Object.defineProperty(exports, "RandomArray", { enumerable: true, get: function () { return getRandomArray_1.getRandomArray; } });
var toSmallNumber_1 = require("./lib/toSmallNumber");
Object.defineProperty(exports, "SmallNumber", { enumerable: true, get: function () { return toSmallNumber_1.toSmallNumber; } });
var getSystemStats_1 = require("./lib/getSystemStats");
Object.defineProperty(exports, "SystemInfo", { enumerable: true, get: function () { return getSystemStats_1.getSystemStats; } });
var tagReplace_1 = require("./lib/tagReplace");
Object.defineProperty(exports, "Replace", { enumerable: true, get: function () { return tagReplace_1.tagReplace; } });
exports.default = {
    RandomNumber: getRandomNumber_1.getRandomNumber,
    RandomArray: getRandomArray_1.getRandomArray,
    SmallNumber: toSmallNumber_1.toSmallNumber,
    SystemInfo: getSystemStats_1.getSystemStats,
    Replace: tagReplace_1.tagReplace,
};
