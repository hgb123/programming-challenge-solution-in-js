/*
LeetCode > Non-decreasing Array

Tags: array
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
  // replace
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      if (nums[i] > nums[i + 2]) {
        nums[i] = nums[i + 1];
      } else {
        nums[i + 1] = nums[i];
      }
      break;
    }
  }

  // recheck
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      return false;
    }
  }
  return true;
};
