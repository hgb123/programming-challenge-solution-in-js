/*
LeetCode > Delete Operation for Two Strings

Tags: string, recursion, dynamic programming
*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const getLcs = (word1, word2) => {
    const getKey = (i, j) => `${i}-${j}`;

    const recursion = (word1, word2, i, j, memo = {}) => {
      if (memo[getKey(i, j)] !== undefined) {
        return memo[getKey(i, j)];
      }

      if (i === 0 || j === 0) {
        return 0;
      }

      if (word1[i - 1] === word2[j - 1]) {
        return (memo[getKey(i, j)] =
          1 + recursion(word1, word2, i - 1, j - 1, memo));
      }

      return (memo[getKey(i, j)] = Math.max(
        recursion(word1, word2, i - 1, j, memo),
        recursion(word1, word2, i, j - 1, memo)
      ));
    };

    return recursion(word1, word2, word1.length, word2.length);
  };

  return word1.length + word2.length - 2 * getLcs(word1, word2);
};
