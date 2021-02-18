/*
LeetCode > Arithmetic Slices

Tags: math, dynamic programming
*/

/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function (A) {
  const N = A.length;
  let res = 0;
  let acc = 0;
  for (let i = 2; i < N; i++) {
    if (A[i] - A[i - 1] === A[i - 1] - A[i - 2]) {
      acc++;
      res += acc;
    } else {
      acc = 0;
    }
  }
  return res;
};

var numberOfArithmeticSlices = function (A) {
  const N = A.length;
  let res = 0;
  let acc = 0;
  for (let i = 2; i < N; i++) {
    if (A[i] - A[i - 1] === A[i - 1] - A[i - 2]) {
      acc++;
    } else {
      res += (acc * (acc + 1)) / 2;
      acc = 0;
    }
  }
  res += (acc * (acc + 1)) / 2;
  return res;
};
