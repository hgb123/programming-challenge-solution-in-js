/*
LeetCode > First Unique Character in a String

Tags: hash table, string
*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let res = -1;
  for (const c of s) {
    if (s.indexOf(c) === s.lastIndexOf(c)) {
      res = s.indexOf(c);
      break;
    }
  }
  return res;
};
