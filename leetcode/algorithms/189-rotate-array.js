/*
LeetCode > Rotate Array

Tags: array
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  while (k--) {
    let temp = nums.pop();
    nums.unshift(temp);
  }
};
