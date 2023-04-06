"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Replace = exports.SystemInfo = exports.SmallNumber = exports.Random = void 0;
var getRandom_1 = require("./lib/getRandom");
Object.defineProperty(exports, "Random", { enumerable: true, get: function () { return getRandom_1.getRandom; } });
var toSmallNumber_1 = require("./lib/toSmallNumber");
Object.defineProperty(exports, "SmallNumber", { enumerable: true, get: function () { return toSmallNumber_1.toSmallNumber; } });
var getSystemStats_1 = require("./lib/getSystemStats");
Object.defineProperty(exports, "SystemInfo", { enumerable: true, get: function () { return getSystemStats_1.getSystemStats; } });
var tagReplace_1 = require("./lib/tagReplace");
Object.defineProperty(exports, "Replace", { enumerable: true, get: function () { return tagReplace_1.tagReplace; } });
exports.default = {
    Random: getRandom_1.getRandom,
    SmallNumber: toSmallNumber_1.toSmallNumber,
    SystemInfo: getSystemStats_1.getSystemStats,
    Replace: tagReplace_1.tagReplace,
};
