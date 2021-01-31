/*
LeetCode > Count the Number of Consistent Strings

Tags: string
*/

var countConsistentStrings = function (allowed, words) {
  return words
    .map((word) => word.replace(new RegExp(`[${allowed}]`, "g"), ""))
    .filter((word) => !word).length;
};
