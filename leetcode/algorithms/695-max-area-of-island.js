/*
LeetCode > Max Area of Island

Tags: dfs
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const [m, n] = [grid.length, grid[0].length];
  const visited = Array.from({ length: m }, (_) => Array(n).fill(false));

  const recursive = (row, col) => {
    if (
      row < 0 ||
      row >= m ||
      col < 0 ||
      col >= n ||
      visited[row][col] === true ||
      grid[row][col] === 0
    ) {
      return 0;
    }

    visited[row][col] = true;
    return (
      1 +
      recursive(row, col + 1) +
      recursive(row, col - 1) +
      recursive(row + 1, col) +
      recursive(row - 1, col)
    );
  };

  let res = 0;
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      res = Math.max(res, recursive(row, col));
    }
  }

  return res;
};
