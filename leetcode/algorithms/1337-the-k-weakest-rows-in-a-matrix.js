/*
LeetCode > The K Weakest Rows in a Matrix

Tags: array
*/

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  return mat
    .map((r, i) => [r, i])
    .sort((a, b) => a[0].filter(Boolean).length - b[0].filter(Boolean).length)
    .slice(0, k)
    .map(([_, i]) => i);
};
