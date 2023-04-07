"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Replace = exports.SystemInfo = exports.SmallNumber = exports.Random = void 0;
var Random_1 = require("./lib/Random");
Object.defineProperty(exports, "Random", { enumerable: true, get: function () { return Random_1.Random; } });
var SmallNumber_1 = require("./lib/SmallNumber");
Object.defineProperty(exports, "SmallNumber", { enumerable: true, get: function () { return SmallNumber_1.SmallNumber; } });
var SystemInfo_1 = require("./lib/SystemInfo");
Object.defineProperty(exports, "SystemInfo", { enumerable: true, get: function () { return SystemInfo_1.SystemInfo; } });
var Replace_1 = require("./lib/Replace");
Object.defineProperty(exports, "Replace", { enumerable: true, get: function () { return Replace_1.Replace; } });
require("./stubbyconfig");
exports.default = {
    Random: Random_1.Random,
    SmallNumber: SmallNumber_1.SmallNumber,
    SystemInfo: SystemInfo_1.SystemInfo,
    Replace: Replace_1.Replace,
};
