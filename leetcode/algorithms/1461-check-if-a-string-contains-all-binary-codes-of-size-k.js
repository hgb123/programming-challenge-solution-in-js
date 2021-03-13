/*
LeetCode > Check If a String Contains All Binary Codes of Size K

Tags: string, bit manipulation
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function (s, k) {
  return (
    new Set(
      Array.from({ length: s.length - k + 1 }, (_, i) => s.substring(i, i + k))
    ).size === Math.pow(2, k)
  );
};
