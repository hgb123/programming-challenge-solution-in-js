/*
LeetCode > Valid Palindrome

Tags: two pointers, string
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const getReversed = (s) => s.split("").reverse().join("");
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  return s === getReversed(s);
};
