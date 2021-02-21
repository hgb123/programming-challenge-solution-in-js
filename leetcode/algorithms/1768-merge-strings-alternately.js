/*
LeetCode > Merge Strings Alternately

Tags: string
*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  word1 = word1.split("");
  word2 = word2.split("");
  let res = "";
  while (word1.length && word2.length) {
    res += word1.shift() + word2.shift();
  }
  if (word1.length) res += word1.join("");
  if (word2.length) res += word2.join("");
  return res;
};
