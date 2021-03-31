/*
LeetCode > Russian Doll Envelopes

Tags: dynamic programming

Approach: longest increasing subsequence
*/

/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
  const N = envelopes.length;
  const mem = Array(N).fill(null);
  envelopes.sort((a, b) => a[0] - b[0]);

  const lis = (i) => {
    if (mem[i] !== null) {
      return mem[i];
    }

    let res = 1;
    for (let j = 0; j < i; j++) {
      if (
        envelopes[j][0] < envelopes[i][0] &&
        envelopes[j][1] < envelopes[i][1]
      ) {
        res = Math.max(res, 1 + lis(j));
      }
    }

    return (mem[i] = res);
  };

  let max = -Infinity;
  for (let i = 0; i < N; i++) {
    max = Math.max(max, lis(i));
  }

  return max;
};
