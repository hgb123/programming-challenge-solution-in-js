/*
Approach:
  Accumulated XOR
  Desc sort
*/

var kthLargestValue = function (matrix, k) {
  let m = matrix[0].length;
  let n = matrix.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const up = i - 1 < 0 ? 0 : matrix[i - 1][j];
      const left = j - 1 < 0 ? 0 : matrix[i][j - 1];
      const upleft = j - 1 < 0 || i - 1 < 0 ? 0 : matrix[i - 1][j - 1];
      matrix[i][j] ^= up ^ left ^ upleft;
    }
  }

  return matrix.flat().sort((a, b) => b - a)[k - 1];
};
