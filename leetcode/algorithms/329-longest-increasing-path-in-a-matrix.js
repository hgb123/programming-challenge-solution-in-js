/*
LeetCode > Longest Increasing Path in a Matrix

Tags: dynamic programming, dfs, topological sort
*/

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  const [M, N] = [matrix.length, matrix[0].length];
  let memo = Array.from({ length: M }, (_) => Array(N).fill(null));

  const outOfBound = (i, j) => i < 0 || i >= M || j < 0 || j >= N;

  const recursion = (i, j, prevCell) => {
    if (outOfBound(i, j) || matrix[i][j] <= prevCell) {
      return 0;
    }

    if (memo[i][j] !== null) {
      return memo[i][j];
    }

    const path =
      1 +
      Math.max(
        recursion(i + 1, j, matrix[i][j]),
        recursion(i - 1, j, matrix[i][j]),
        recursion(i, j + 1, matrix[i][j]),
        recursion(i, j - 1, matrix[i][j])
      );

    return (memo[i][j] = path);
  };

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      recursion(i, j, -Infinity);
    }
  }

  return Math.max.apply(null, memo.flat());
};
