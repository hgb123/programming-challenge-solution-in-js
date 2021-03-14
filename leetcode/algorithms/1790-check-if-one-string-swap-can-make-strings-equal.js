/*
LeetCode > Check if One String Swap Can Make Strings Equal

Tags: string

Approach: swap and unswap
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
  s2 = s2.split("");
  for (let i = 0; i < s2.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      [s2[i], s2[j]] = [s2[j], s2[i]];
      if (s2.join("") === s1) {
        return true;
      }
      [s2[i], s2[j]] = [s2[j], s2[i]];
    }
  }
  return false;
};
