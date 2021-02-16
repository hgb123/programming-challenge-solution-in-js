/*
LeetCode > Letter Case Permutation

Tags: backtracking
*/

const recursion = function (chars, set, i = 0) {
  set.add(chars.join(""));

  if (i === chars.length) {
    return;
  }

  for (let j = i; j < chars.length; j++) {
    let temp = chars[j];
    chars[j] =
      temp === temp.toLowerCase() ? temp.toUpperCase() : temp.toLowerCase();
    recursion(chars, set, j + 1);
    chars[j] = temp;
  }
};

/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function (S) {
  const chars = S.split("");
  let set = new Set();
  recursion(chars, set);
  return Array.from(set);
};
