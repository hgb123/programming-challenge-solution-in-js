/*
LeetCode > Minimum Number of Operations to Reinitialize a Permutation

Tags: array, greedy
*/

/**
 * @param {number} n
 * @return {number}
 */
var reinitializePermutation = function (n) {
  let perm = Array.from({ length: n }, (_, i) => i);
  const original = perm.join("");
  let res = 0;
  while (true) {
    res++;
    const arr = [...perm];
    for (let i = 0; i < n; i++) {
      if (i % 2 === 0) {
        arr[i] = perm[i / 2];
      } else {
        arr[i] = perm[n / 2 + (i - 1) / 2];
      }
    }
    perm = arr;
    if (perm.join("") === original) {
      break;
    }
  }
  return res;
};
