/*
LeetCode > Minimum Changes To Make Alternating Binary String

Tags: array, greedy

Approach:
  create 2 possible output s1, s2
  calculate the number of steps from s to each of those
  find min between 2 of them
*/

/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
  const N = s.length;
  const chars = s.split("").map(Number);
  const s1 = Array.from({ length: N }, (_, i) => (i % 2 === 0 ? 1 : 0));
  const s2 = Array.from({ length: N }, (_, i) => (i % 2 === 0 ? 0 : 1));
  return Math.min.apply(
    null,
    chars.reduce(
      (acc, el, i) => [
        acc[0] + (el !== s1[i] ? 1 : 0),
        acc[1] + (el !== s2[i] ? 1 : 0),
      ],
      [0, 0]
    )
  );
};
