/*
LeetCode > Maximum Distance Between a Pair of Values

Tags: two pointers, binary search, greedy
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// binary search, O(nlogn)
var maxDistance = function (nums1, nums2) {
  let max = 0;

  for (let i = 0; i < nums1.length; i++) {
    let left = i;
    let right = nums2.length - 1;
    let mid;
    while (left <= right) {
      mid = Math.floor((left + right) / 2);
      if (nums1[i] > nums2[mid]) {
        right = mid - 1;
      } else {
        max = Math.max(max, Math.max(0, mid - i));
        left = mid + 1;
      }
    }
  }

  return max;
};

// two pointers, O(n)
var maxDistance = function (nums1, nums2) {
  let [i, j, max] = [0, 0, 0];

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] > nums2[j]) {
      i++;
    } else {
      j++;
    }
    max = Math.max(max, j - i - 1);
  }

  return max;
};
