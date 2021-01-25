/*
Approach:
  Kadane algorithm
  (X, Y, Z): X + 1, Z - 1, and skip Y
  Maintain 2 kadane prefix, one for ending at (normal), one for starting at (reversed)
*/

function solution(A) {
  const N = A.length;
  const maxEndingAt = Array(N).fill(0);
  const maxStartingAt = Array(N).fill(0);

  for (let i = 1; i < N - 1; i++) {
    maxEndingAt[i] = Math.max(0, maxEndingAt[i - 1] + A[i]);
  }
  for (let i = N - 2; i > 0; i--) {
    maxStartingAt[i] = Math.max(0, A[i] + maxStartingAt[i + 1]);
  }

  let max = -Infinity;
  for (let i = 1; i < N - 1; i++) {
    max = Math.max(max, maxEndingAt[i - 1] + maxStartingAt[i + 1]);
  }
  return max;
}
