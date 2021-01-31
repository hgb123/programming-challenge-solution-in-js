/*
LeetCode > Check If Two String Arrays are Equivalent

Tags: string
*/

var arrayStringsAreEqual = function (word1, word2) {
  return word1.join("").localeCompare(word2.join("")) === 0;
};
