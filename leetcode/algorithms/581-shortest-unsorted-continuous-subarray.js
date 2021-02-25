/*
LeetCode > Shortest Unsorted Continuous Subarray

Tags: array

Approach:
  create a sorted version
  answer is the distance from first diff to last diff
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  const sortedNums = [...nums].sort((a, b) => a - b);
  const same = nums.map((num, i) => num === sortedNums[i]);
  return same.every(Boolean)
    ? 0
    : same.lastIndexOf(false) - same.indexOf(false) + 1;
};
