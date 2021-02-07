/*
LeetCode > Shortest Distance to a Character

Tags: array, string

Approach:
  create array of c's indexes
  with each char, find min of diff array from c's indexes
*/

/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  const chars = s.split("");
  const cIdxes = chars.reduce(
    (acc, el, idx) => (el === c ? [...acc, idx] : acc),
    []
  );
  return chars.map((_, idx) =>
    Math.min.apply(
      null,
      cIdxes.map((cIdx) => Math.abs(idx - cIdx))
    )
  );
};
