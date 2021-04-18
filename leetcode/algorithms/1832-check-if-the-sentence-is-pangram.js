/*
LeetCode > Check if the Sentence Is Pangram

Tags: string
*/

/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  return new Set(sentence.split("")).size === 26;
};
