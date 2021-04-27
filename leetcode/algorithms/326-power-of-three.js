/*
LeetCode > Power of Three

Tags: math
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  return Number.isInteger(+(Math.log(n) / Math.log(3)).toFixed(12));
};
