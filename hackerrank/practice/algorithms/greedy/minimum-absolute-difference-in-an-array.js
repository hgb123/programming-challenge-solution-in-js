/*
HackerRank > Minimum Absolute Difference in an Array

Categories: greedy
*/

function minimumAbsoluteDifference(arr) {
  const N = arr.length;
  arr.sort((a, b) => a - b);
  let min = Infinity;
  for (let i = 0; i < N - 1; i++) {
    min = Math.min(min, Math.abs(arr[i] - arr[i + 1]));
  }
  return min;
}
