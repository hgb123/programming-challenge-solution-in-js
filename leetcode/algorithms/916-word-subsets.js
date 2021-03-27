/*
LeetCode > Word Subsets

Tags: string
*/

const count = (word) => {
  let occ = new Int8Array(26);
  for (const c of word.split("")) {
    occ[c.charCodeAt(0) - "a".charCodeAt(0)]++;
  }
  return occ;
};

/**
 * @param {string[]} A
 * @param {string[]} B
 * @return {string[]}
 */
var wordSubsets = function (A, B) {
  const bMax = new Int8Array(26);
  for (const b of B) {
    const bCount = count(b);
    for (let i = 0; i < 26; i++) {
      bMax[i] = Math.max(bMax[i], bCount[i]);
    }
  }

  const res = [];
  aIteration: for (const a of A) {
    const aCount = count(a);
    for (let i = 0; i < 26; i++) {
      if (aCount[i] < bMax[i]) {
        continue aIteration;
      }
    }
    res.push(a);
  }

  return res;
};
