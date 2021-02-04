/*
LeetCode > Rotate Image

Tags: array
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const N = matrix.length;
  const M = matrix[0].length;
  matrix.reverse();
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < M; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  return matrix;
};
