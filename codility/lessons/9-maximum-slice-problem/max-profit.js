/*
Approach:
  Keep track of the min day
*/

function solution(A) {
  let max = -Infinity;
  let min = A[0];
  for (let i = 1; i < A.length; i++) {
    max = Math.max(max, A[i] - min);
    if (min > A[i]) {
      min = A[i];
    }
  }
  return max > 0 ? max : 0;
}
