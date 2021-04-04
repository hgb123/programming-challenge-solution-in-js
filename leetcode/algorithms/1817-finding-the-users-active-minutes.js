/*
LeetCode > Finding the Users Active Minutes

Tags: hash table
*/

/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function (logs, k) {
  const res = Array(k).fill(0);

  const map = logs.reduce((acc, [userId, min]) => {
    if (!acc.has(userId)) {
      acc.set(userId, new Set());
    }
    acc.set(userId, acc.get(userId).add(min));
    return acc;
  }, new Map());

  for (const userMinSet of map.values()) {
    res[userMinSet.size - 1]++;
  }

  return res;
};
