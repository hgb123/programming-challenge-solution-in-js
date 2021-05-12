/*
LeetCode > Range Sum Query 2D - Immutable

Tags: array, dynamic programming
*/

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

// row-based prefix sums
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  [this.M, this.N] = [matrix.length, matrix[0].length];

  this.prefixSum = Array.from({ length: this.M }, (_) => Array(this.N).fill());

  for (let row = 0; row < this.M; row++) {
    for (let col = 0; col < this.N; col++) {
      this.prefixSum[row][col] =
        matrix[row][col] + (this.prefixSum[row][col - 1] || 0);
    }
  }
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  let sum = 0;
  for (let row = row1; row <= row2; row++) {
    sum += this.prefixSum[row][col2] - (this.prefixSum[row][col1 - 1] || 0);
  }
  return sum;
};

// sub matrix
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  [this.M, this.N] = [matrix.length, matrix[0].length];

  this.prefixSum = Array.from({ length: this.M + 1 }, (_) =>
    Array(this.N + 1).fill(0)
  );

  for (let row = 0; row < this.M; row++) {
    for (let col = 0; col < this.N; col++) {
      this.prefixSum[row + 1][col + 1] =
        this.prefixSum[row + 1][col] +
        this.prefixSum[row][col + 1] -
        this.prefixSum[row][col] +
        matrix[row][col];
    }
  }
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  return (
    this.prefixSum[row2 + 1][col2 + 1] -
    this.prefixSum[row1][col2 + 1] -
    this.prefixSum[row2 + 1][col1] +
    this.prefixSum[row1][col1]
  );
};
