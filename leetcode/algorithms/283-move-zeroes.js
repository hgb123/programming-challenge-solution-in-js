/*
LeetCode > Move Zeroes

Tags: array, two pointers
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  const N = nums.length;
  for (let i = 0; i < N - 1; i++) {
    for (let j = i + 1; j < N; j++) {
      if (nums[i] === 0) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
  }
};
