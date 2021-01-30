/*
Codility > MaxNonoverlappingSegments
Find a maximal set of non-overlapping segments.

Categories: greedy

Approach:
  Compare current's start (A) with previous' end (B)
*/

function solution(A, B) {
  const N = A.length;
  let res = N ? 1 : 0;
  let prevB = B[0];
  for (let i = 1; i < N; i++) {
    if (A[i] > prevB) {
      res++;
      prevB = B[i];
    }
  }
  return res;
}
