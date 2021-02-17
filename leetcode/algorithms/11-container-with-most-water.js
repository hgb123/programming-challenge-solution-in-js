/*
LeetCode > Container With Most Water

Tags: array, two pointers

Approach:
  the point here is to prove why when h[i] < h[j] we move i to the right
  by contradiction, if we move j to the left instead:
    horizontal length will reduce whatever
    if h[j-1] < h[i] => area will be h[j-1] * horizontal length => smaller than previous
    if h[j-1] > h[i] => area will be h[i] * horizontal length => smaller than previous
  so there is no way moving j to the left will produce larger area
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let i = 0;
  let j = height.length - 1;
  let max = -Infinity;
  while (i != j) {
    max = Math.max(max, Math.min(height[i], height[j]) * Math.abs(i - j));
    if (height[i] > height[j]) {
      j--;
    } else {
      i++;
    }
  }
  return max;
};
