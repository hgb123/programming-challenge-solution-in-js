/*
LeetCode > Equal Sum Arrays With Minimum Number of Operations

Tags: greedy

Approach:
  store the array of changes
    with array of larger sum, calculate the change to 1 for each
    with array of smaller sum, calculate the change to 6 for each
  sort the change desc, decrease the init sum diff between two arrays
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minOperations = function (nums1, nums2) {
  const sum = (arr) => arr.reduce((acc, el) => acc + el, 0);

  let largerSumArr, smallerSumArr;
  if (sum(nums1) > sum(nums2)) {
    largerSumArr = [...nums1];
    smallerSumArr = [...nums2];
  } else {
    largerSumArr = [...nums2];
    smallerSumArr = [...nums1];
  }

  let res = 0;
  let diff = sum(largerSumArr) - sum(smallerSumArr);

  if (diff === 0) {
    return 0;
  }

  let changes = [
    ...largerSumArr.map((el) => el - 1),
    ...smallerSumArr.map((el) => 6 - el),
  ].sort((a, b) => b - a);

  for (const change of changes) {
    res++;
    diff -= change;
    if (diff <= 0) return res;
  }

  return -1;
};
