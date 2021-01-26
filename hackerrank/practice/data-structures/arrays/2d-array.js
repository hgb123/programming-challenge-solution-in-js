/*
HackerRank > 2D Array - DS
*/

function hourglassSum(arr) {
  const N = arr.length;
  const M = arr[0].length;
  let max = -Infinity;

  for (let i = 0; i < N - 2; i++) {
    for (let j = 0; j < M - 2; j++) {
      max = Math.max(
        max,
        arr[i][j] +
          arr[i][j + 1] +
          arr[i][j + 2] +
          arr[i + 1][j + 1] +
          arr[i + 2][j] +
          arr[i + 2][j + 1] +
          arr[i + 2][j + 2]
      );
    }
  }

  return max;
}
