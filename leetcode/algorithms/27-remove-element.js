/*
LeetCode > Remove Element

Tags: array, two pointers
*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let i = 0,
    valCount = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i++] = nums[j];
    } else {
      valCount++;
    }
  }
  nums.length -= valCount;
};
