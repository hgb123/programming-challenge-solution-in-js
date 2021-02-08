/*
LeetCode > Set Matrix Zeroes

Tags: array
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const N = matrix.length;
  const M = matrix[0].length;
  let setI = new Set();
  let setJ = new Set();

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (matrix[i][j] === 0) {
        setI.add(i);
        setJ.add(j);
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (setI.has(i) || setJ.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
};
