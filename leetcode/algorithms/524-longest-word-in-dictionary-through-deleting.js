/*
LeetCode > Longest Word in Dictionary through Deleting

Tags: two pointers, sort
*/

const isSubset = (s1, s2) => {
  s1 = s1.split("");
  s2 = s2.split("");
  while (s2.length) {
    if (s2.pop() === s1.slice(-1)[0]) {
      s1.pop();
    }
  }
  return s1.length === 0;
};

/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function (s, d) {
  let max = 0;
  let maxWord = "";
  d = d.sort();
  for (const word of d) {
    if (isSubset(word, s) && word.length > max) {
      max = word.length;
      maxWord = word;
    }
  }

  return maxWord;
};
