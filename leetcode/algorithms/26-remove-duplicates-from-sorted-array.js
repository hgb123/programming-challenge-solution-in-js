/*
LeetCode > Remove Duplicates from Sorted Array

Constraint: O(1) extra memory

Tags: array
*/

var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    while (nums[i + 1] === nums[i]) {
      nums.splice(i + 1, 1);
    }
  }
  return nums.length;
};
