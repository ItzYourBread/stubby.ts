"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toEncode = void 0;
function toEncode(str) {
    return Buffer.from(str).toString('base64');
}
exports.toEncode = toEncode;
