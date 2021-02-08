/*
LeetCode > Duplicate Zeros

Tags: array
*/

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  const N = arr.length;
  for (let i = 0; i < N - 1; i++) {
    if (arr[i] === 0) {
      let prev = arr[i + 1];
      for (let j = i + 2; j < N; j++) {
        let temp = arr[j];
        arr[j] = prev;
        prev = temp;
      }
      arr[++i] = 0;
    }
  }
};
