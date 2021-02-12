/*
LeetCode > Number of Steps to Reduce a Number to Zero

Tags: bit manipulation
*/

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let count = 0;
  while (num) {
    count++;
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num--;
    }
  }
  return count;
};
