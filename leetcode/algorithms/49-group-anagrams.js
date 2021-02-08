/*
LeetCode > Group Anagrams

Tags: hash table, string
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const sortStr = (str) => str.split("").sort().join("");
  return [
    ...strs
      .reduce((acc, el) => {
        let sortedStr = sortStr(el);
        if (!acc.has(sortedStr)) {
          acc.set(sortedStr, [el]);
        } else {
          acc.get(sortedStr).push(el);
        }
        return acc;
      }, new Map())
      .values(),
  ];
};
