/*
LeetCode > Second Largest Digit in a String

Tags: string
*/

/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
  d = Array.from(
    new Set(
      s
        .split("")
        .map(Number)
        .filter(Number.isInteger)
        .sort((a, b) => b - a)
    )
  );
  return d[1] ?? -1;
};
