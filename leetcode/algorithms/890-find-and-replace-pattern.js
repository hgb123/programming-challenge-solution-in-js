/*
LeetCode > Find and Replace Pattern

Tags: string, hash table
*/

/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
  return words.filter((word) => {
    const map = new Map();
    const set = new Set();
    return word.split("").every((char, i) => {
      if (!set.has(char) && !map.has(pattern[i])) {
        map.set(pattern[i], char);
        set.add(char); // avoid two diff pattern[i] match for one same char
      }
      return map.get(pattern[i]) === char;
    });
  });
};
