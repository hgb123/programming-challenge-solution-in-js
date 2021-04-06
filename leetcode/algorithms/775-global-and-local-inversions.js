/*
LeetCode > Global and Local Inversions

Tags: array, math

Approach:
  local inversions are subset of global inversion
  so meanwhile
    global: i < j where A[i] > A[j]
    local:  i     where A[i] > A[i + 1]
  then, local equals global when there is no A[i] > A[j = i + 2]
*/

/**
 * @param {number[]} A
 * @return {boolean}
 */
// O(N^2)
var isIdealPermutation = function (A) {
  const N = A.length;
  let [globalInversions, localInversions] = [0, 0];
  for (let i = 0; i < N; i++) {
    if (i + 1 < N && A[i] > A[i + 1]) {
      localInversions++;
    }
    for (let j = i + 1; j < N; j++) {
      if (A[i] > A[j]) {
        globalInversions++;
      }
    }
  }
  return globalInversions === localInversions;
};

// O(N)
var isIdealPermutation = function (A) {
  const N = A.length;
  let max = 0;
  for (let i = 0; i < N - 2; i++) {
    max = Math.max(max, A[i]);
    if (max > A[i + 2]) {
      return false;
    }
  }
  return true;
};
