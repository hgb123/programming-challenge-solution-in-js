/*
LeetCode > Minimum Absolute Sum Difference

Tags: greedy, binary search
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minAbsoluteSumDiff = function (nums1, nums2) {
  const diffArr = nums1.map((num1, i) => Math.abs(num1 - nums2[i]));
  const maxDiff = Math.max(...diffArr);
  const maxDiffIdx = diffArr.findIndex((diff) => diff === maxDiff);
  const diffSum = diffArr.reduce((acc, el) => acc + el, 0) - maxDiff;

  let res = Infinity;
  for (const num of nums1) {
    res = Math.min(res, diffSum + Math.abs(num - nums2[maxDiffIdx]));
  }

  return res % (1e9 + 7);
};
