/*
LeetCode > Partitioning Into Minimum Number Of Deci-Binary Numbers

Tags: greedy
*/

/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n) {
  return Math.max.apply(null, n.split("").map(Number));
};
