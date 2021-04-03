/*
LeetCode > Sentence Similarity III

Tags: string
*/

/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function (sentence1, sentence2) {
  const words1 = sentence1.split(" ");
  const words2 = sentence2.split(" ");
  while (words1.length > 0 && words2.length > 0 && words1[0] === words2[0]) {
    words1.shift();
    words2.shift();
  }
  while (
    words1.length > 0 &&
    words2.length > 0 &&
    words1.slice(-1)[0] === words2.slice(-1)[0]
  ) {
    words1.pop();
    words2.pop();
  }
  return words1.length === 0 || words2.length === 0;
};
