/*
LeetCode > Count Number of Homogenous Substrings

Tags: string, greedy

Approach:
  accumulated count for contiguous substring of the same characters
  "a" -> 1 (1)
  "aa" -> 3 (1 + 2)
  "aaa" -> 6 (1 + 2 + 3)
*/

/**
 * @param {string} s
 * @return {number}
 */
var countHomogenous = function (s) {
  let res = 0,
    prev = "",
    acc;
  for (const c of s) {
    acc = c === prev ? acc + 1 : 1;
    prev = c;
    res += acc;
  }
  return res % (1e9 + 7);
};
