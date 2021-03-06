/*
LeetCode > Sum of Beauty of All Substrings

Tags: brute force, hash table, string
*/

/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function (s) {
  const N = s.length;
  let sum = 0;
  for (let i = 0; i < N; i++) {
    const frequency = Array(26).fill(0);
    for (let j = i; j < N; j++) {
      frequency[s[j].charCodeAt(0) - "a".charCodeAt(0)]++;
      sum +=
        Math.max.apply(null, frequency) -
        Math.min.apply(null, frequency.filter(Boolean));
    }
  }
  return sum;
};
