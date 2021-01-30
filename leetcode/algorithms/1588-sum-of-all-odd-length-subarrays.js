/*
LeetCode > Sum of All Odd Length Subarrays

Tags: array
*/

var sumOddLengthSubarrays = function (arr) {
  const N = arr.length;
  const sum = (arr) => arr.reduce((acc, el) => acc + el, 0);
  let res = 0;
  for (let size = 1; size <= N; size += 2) {
    for (let i = 0; i < N - size + 1; i++) {
      res += sum(arr.slice(i, i + size));
    }
  }
  return res;
};
