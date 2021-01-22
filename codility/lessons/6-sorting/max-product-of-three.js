// A[P] * A[Q] * A[R] = A[P] * A[R] * A[Q] = ...

function solution(A) {
  const n = A.length - 1;
  A = A.sort((a, b) => a - b);
  return Math.max.apply(null, [
    A[n] * A[n - 1] * A[n - 2],
    A[n] * A[n - 1] * A[0],
    A[n] * A[0] * A[1],
  ]);
}
