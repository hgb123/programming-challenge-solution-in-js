/*
LeetCode > Merge Sorted Array

Tags: array, two pointers

Approach:
  O(n + m): go from largest to smallest
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// O(m * n)
var merge = function (nums1, m, nums2, n) {
  let i = m;
  while (nums2.length) {
    let el = nums2.shift();
    nums1[i] = el;
    let j = i;
    while (true) {
      if (nums1[j] < nums1[j - 1]) {
        [nums1[j], nums1[j - 1]] = [nums1[j - 1], nums1[j]];
        j--;
        continue;
      }
      break;
    }
    i++;
  }
};

// O(m + n)
var merge = function (nums1, m, nums2, n) {
  let i = m + n - 1;
  m--;
  n--;
  while (m >= 0 && n >= 0) {
    if (nums1[m] > nums2[n]) {
      nums1[i--] = nums1[m--];
    } else {
      nums1[i--] = nums2[n--];
    }
  }
  while (n >= 0) {
    nums1[i--] = nums2[n--];
  }
};
