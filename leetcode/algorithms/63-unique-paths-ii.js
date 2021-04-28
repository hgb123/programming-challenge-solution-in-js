/*
LeetCode > Unique Paths II

Tags: array, dynamic programming, recursion
*/

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const [M, N] = [obstacleGrid.length, obstacleGrid[0].length];
  const memo = Array.from({ length: M }, (_) => Array(N).fill(null));

  const recursion = (i, j) => {
    if (memo[i][j] !== null) {
      return memo[i][j];
    }

    if (obstacleGrid[i][j] === 1) {
      return 0;
    }

    if (i === M - 1 && j === N - 1) {
      return 1;
    }

    let numberOfWays = 0;
    if (i < M - 1) {
      numberOfWays += recursion(i + 1, j);
    }
    if (j < N - 1) {
      numberOfWays += recursion(i, j + 1);
    }

    return (memo[i][j] = numberOfWays);
  };

  return recursion(0, 0);
};
