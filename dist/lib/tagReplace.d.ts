/**
 * Replaces all occurrences of tags in a string with their corresponding values.
 * @param str - The string to perform tag replacement on.
 * @param replacements - An object containing the tags and their respective values.
 * @returns The modified string with all tag occurrences replaced by their corresponding values.
 */
export declare function tagReplace(str: string, replacements: {
    [key: string]: string;
}): string;
