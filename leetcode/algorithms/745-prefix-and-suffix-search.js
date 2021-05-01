/*
LeetCode > Prefix and Suffix Search

Tags: trie, hashmap
*/

/**
 * @param {string[]} words
 */
var WordFilter = function (words) {
  this.mapPrefix = new Map();
  this.mapSuffix = new Map();

  for (const [wordIndex, word] of words.entries()) {
    for (let i = 0; i <= word.length; i++) {
      const [prefix, suffix] = [
        word.substring(0, i),
        word.substring(word.length - i),
      ];

      if (!this.mapPrefix.has(prefix)) {
        this.mapPrefix.set(prefix, []);
      }
      if (!this.mapSuffix.has(suffix)) {
        this.mapSuffix.set(suffix, []);
      }

      this.mapPrefix.get(prefix).push(wordIndex);
      this.mapSuffix.get(suffix).push(wordIndex);
    }
  }
};

/**
 * @param {string} prefix
 * @param {string} suffix
 * @return {number}
 */
WordFilter.prototype.f = function (prefix, suffix) {
  if (!this.mapPrefix.has(prefix) || !this.mapSuffix.has(suffix)) {
    return -1;
  }

  const [prefixes, suffixes] = [
    this.mapPrefix.get(prefix),
    this.mapSuffix.get(suffix),
  ];
  let [i, j] = [prefixes.length - 1, suffixes.length - 1];

  while (i >= 0 && j >= 0) {
    if (prefixes[i] < suffixes[j]) {
      j--;
    } else if (prefixes[i] > suffixes[j]) {
      i--;
    } else {
      return prefixes[i];
    }
  }

  return -1;
};
