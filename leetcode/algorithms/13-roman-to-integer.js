/*
LeetCode > Roman to Integer

Tags: math, string
*/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  s = s.split("");
  const symbolValue = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    if (symbolValue[s[i]] < symbolValue[s[i + 1]]) {
      res -= symbolValue[s[i]];
    } else {
      res += symbolValue[s[i]];
    }
  }
  return res;
};
