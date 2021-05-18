/*
LeetCode > Longest String Chain

Tags: hash table, dynamic programming
*/

/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function (words) {
  const setWords = new Set(words);
  const memo = {};

  const recursion = (word) => {
    if (memo[word] !== undefined) return memo[word];
    if (setWords.has(word) === false) return 0;

    let max = -Infinity;
    for (let i = 0; i < word.length; i++) {
      max = Math.max(
        max,
        1 + recursion(word.substring(0, i) + word.substring(i + 1))
      );
    }

    return (memo[word] = max);
  };

  return Math.max.apply(null, words.map(recursion));
};
