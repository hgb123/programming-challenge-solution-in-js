/*
LeetCode > Remove Palindromic Subsequences

Tags: string

Approach:
  subsequence of a string is resulted from deleting some characters
  the string only contain 'a', 'b', so for a string that is not palindrome, can remove one to make it palindrome
*/

/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function (s) {
  if (!s) {
    return 0;
  }
  if (s === s.split("").reverse().join("")) {
    return 1;
  }
  return 2;
};
