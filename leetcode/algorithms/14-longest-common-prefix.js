/*
LeetCode > Longest Common Prefix

Tags: string

Approach:
  sort the strs, get the min length str
  find the longest substr of the min that is the start of all other strs
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  strs.sort((a, b) => a.length - b.length);
  const min = strs[0];
  let res = "";
  if (!min) {
    return res;
  }
  for (const char of min) {
    let temp = res + char;
    const isPrefixOfAll = strs.every((str) => str.startsWith(temp));
    if (isPrefixOfAll) {
      res = temp;
    } else {
      break;
    }
  }
  return res;
};
