/*
LeetCode > Broken Calculator

Tags: math, greedy

Approach: work backward
*/

/**
 * @param {number} X
 * @param {number} Y
 * @return {number}
 */
var brokenCalc = function (X, Y) {
  let res = 0;
  while (Y > X) {
    res++;
    if (Y % 2 === 0) {
      Y /= 2;
    } else {
      Y++;
    }
  }
  res += X - Y;

  return res;
};
