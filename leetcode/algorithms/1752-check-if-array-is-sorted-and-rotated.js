/*
LeetCode > Check if Array Is Sorted and Rotated

Tags: array

Approach:
  count the number of increasing subarray, call this parts
  if parts > 1: totally false
  if parts === 0: totally true
  if parts = 1:
    check if the last elem of second part lte the first elem of first part
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  const N = nums.length;
  let parts = 0;
  for (let i = 0; i < N - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      parts++;
    }
  }
  if (parts > 1) {
    return false;
  }
  return parts === 0 || nums[0] >= nums[N - 1];
};
