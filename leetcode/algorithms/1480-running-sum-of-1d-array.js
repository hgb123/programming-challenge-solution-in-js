/*
LeetCode > Running Sum of 1d Array

Tags: array
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }
  return nums;
};

var runningSum = function (nums) {
  const prefixSums = [];
  let sum = 0;
  for (const num of nums) {
    sum += num;
    prefixSums.push(sum);
  }
  return prefixSums;
};
