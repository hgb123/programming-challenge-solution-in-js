/*
LeetCode > Verifying an Alien Dictionary

Tags: hash table
*/

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  const N = words.length;
  order = order.split("").reduce((acc, char, i) => acc.set(char, i), new Map());
  let sorted = true;
  for (let i = 0; i < N - 1; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (order.get(words[i][j]) === order.get(words[i + 1][j])) {
        continue;
      } else if (order.get(words[i][j]) < order.get(words[i + 1][j])) {
        break;
      } else {
        sorted = false;
      }
    }
  }
  return sorted;
};
