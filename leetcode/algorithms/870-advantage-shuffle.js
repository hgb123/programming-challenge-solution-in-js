/*
LeetCode > Advantage Shuffle

Tags: array, greedy
*/

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var advantageCount = function (A, B) {
  A = A.sort((a, b) => a - b);
  B = B.map((el, i) => [el, i]).sort(([a], [b]) => b - a); // keep the index for later sort to the start position

  for (const b of B) {
    const a = A.slice(-1)[0];
    if (a > b[0]) {
      b.push(a);
      A.pop();
    }
  }

  return B.map(([b, i, a]) => [b, i, a != null ? a : A.pop()])
    .sort(([, iA], [, iB]) => iA - iB)
    .map(([, , el]) => el);
};
