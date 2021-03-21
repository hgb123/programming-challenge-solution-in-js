/*
LeetCode > Maximum Ascending Subarray Sum

Tags: array
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
  const N = nums.length;
  let sum = nums[0];
  let max = sum;
  for (let i = 1; i < N; i++) {
    if (nums[i] <= nums[i - 1]) {
      sum = 0;
    }
    sum += nums[i];
    max = Math.max(max, sum);
  }
  return max;
};
