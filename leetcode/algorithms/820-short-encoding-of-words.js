/*
LeetCode > Short Encoding of Words

Tags: array, string
*/

/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function (words) {
  words = Array.from(new Set(words));
  let res = "";
  outer: for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (j !== i && words[j].endsWith(words[i])) {
        continue outer;
      }
    }
    res += words[i] + "#";
  }
  return res.length;
};
