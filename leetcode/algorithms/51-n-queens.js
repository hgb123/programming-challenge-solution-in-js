/*
LeetCode > N-Queens

Tags: recursion, backtracking
*/

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const grid = Array.from({ length: n }, (_) => Array(n).fill(0));
  const res = [];

  const validate = (row, col) => {
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < n; j++) {
        if (
          grid[i][j] &&
          (col === j || Math.abs(col - j) === Math.abs(row - i))
        ) {
          return false;
        }
      }
    }
    return true;
  };

  const recursion = (row) => {
    if (row === n) {
      res.push(grid.map((row) => row.map((col) => (col ? "Q" : ".")).join("")));
      return;
    }

    for (let col = 0; col < n; col++) {
      if (validate(row, col)) {
        grid[row][col] = 1;
        recursion(row + 1);
        grid[row][col] = 0;
      }
    }
  };

  recursion(0);

  return res;
};
