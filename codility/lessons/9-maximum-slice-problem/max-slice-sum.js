/*
Approach:
  Kadane algorithm (maximum subarray)
*/

function solution(A) {
  let max = A[0];
  let acc = 0;
  for (let i = 0; i < A.length; i++) {
    acc += A[i];
    max = Math.max(max, acc);
    acc = acc < 0 ? 0 : acc;
  }

  return max;
}
