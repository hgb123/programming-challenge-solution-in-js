/*
LeetCode > Number of Different Integers in a String

Tags: string
*/

/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function (word) {
  return new Set((word.match(/\d+/g) || []).map(Number)).size;
};
