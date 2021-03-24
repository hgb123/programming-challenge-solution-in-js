/*
LeetCode > 3Sum With Multiplicity

Tags: hash table, two pointers

Approach:
  create a hash table counting occurences of two sum
*/

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function (arr, target) {
  const N = arr.length;
  const MOD = 1e9 + 7;
  const map = new Map();

  let res = 0;

  for (let i = 0; i < N; i++) {
    res = (res + (map.get(target - arr[i]) || 0)) % MOD;

    for (let j = 0; j < i; j++) {
      const twoSum = arr[i] + arr[j];
      map.set(twoSum, (map.get(twoSum) || 0) + 1);
    }
  }

  return res;
};
