/*
LeetCode > Missing Number

Tags: array, math
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const n = Math.max.apply(null, [...nums, nums.length]);
  const currentSum = nums.reduce((acc, el) => acc + el, 0);
  const expectedSum = (n * (n + 1)) / 2;
  return expectedSum - currentSum;
};
