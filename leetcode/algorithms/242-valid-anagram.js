/*
LeetCode > Valid Anagram

Tags: string, hash table, sort
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const sortString = (str) =>
    str
      .split("")
      .sort((a, b) => a.localeCompare(b))
      .join("");
  return sortString(s) === sortString(t);
};
