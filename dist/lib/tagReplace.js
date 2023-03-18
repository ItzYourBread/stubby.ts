"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tagReplace = void 0;
/**
 * Replaces all occurrences of tags in a string with their corresponding values.
 * @param str - The string to perform tag replacement on.
 * @param replacements - An object containing the tags and their respective values.
 * @returns The modified string with all tag occurrences replaced by their corresponding values.
 */
function tagReplace(str, replacements) {
    // Iterate over each tag in the replacements object and replace it with its corresponding value in the string
    Object.keys(replacements).forEach(function (tag) {
        str = str.replace(new RegExp(tag, 'g'), replacements[tag]);
    });
    // Return the modified string
    return str;
}
exports.tagReplace = tagReplace;
