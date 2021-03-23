/*
LeetCode > Vowel Spellchecker

Tags: hash table, string
*/

/**
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */
var spellchecker = function (wordlist, queries) {
  const vowelRegex = new RegExp("[aeiou]", "gi");
  const replaceVowel = (str) => str.toLowerCase().replace(vowelRegex, "_");

  const hashTable0 = wordlist.reduce(
    (acc, word) => acc.set(word, word),
    new Map()
  );
  const hashTable1 = wordlist.reduceRight(
    (acc, word) => acc.set(word.toLowerCase(), word),
    new Map()
  );
  const hashTable2 = wordlist.reduceRight(
    (acc, word) => acc.set(replaceVowel(word), word),
    new Map()
  );

  return queries.map((query) => {
    return (
      hashTable0.get(query) ||
      hashTable1.get(query.toLowerCase()) ||
      hashTable2.get(replaceVowel(query)) ||
      ""
    );
  });
};
