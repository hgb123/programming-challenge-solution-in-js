/*
LeetCode > Triangle

Tags: recursion, dynamic programming
*/

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  const memo = Array.from({ length: triangle.length }, (_) =>
    Array(triangle[triangle.length - 1].length).fill(null)
  );

  const recursion = (row, index) => {
    if (memo[row][index] !== null) return memo[row][index];

    if (row + 1 >= triangle.length) return triangle[row][index];

    return (memo[row][index] =
      triangle[row][index] +
      Math.min(recursion(row + 1, index), recursion(row + 1, index + 1)));
  };

  return recursion(0, 0);
};
