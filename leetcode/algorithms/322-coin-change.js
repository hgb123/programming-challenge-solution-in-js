/*
LeetCode > Coin Change

Tags: dynamic programming
*/

const recursion = function (coins, ithCoin, amount, memo) {
  if (amount === 0) {
    return 0;
  }

  if (amount < 0 || ithCoin < 0) {
    return Infinity;
  }

  if (memo[ithCoin][amount]) {
    return memo[ithCoin][amount];
  }

  const res = Math.min(
    1 + recursion(coins, ithCoin, amount - coins[ithCoin], memo),
    recursion(coins, ithCoin - 1, amount, memo)
  );

  memo[ithCoin][amount] = res;
  return res;
};

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const memo = Array.from({ length: coins.length }, (_) =>
    Array(amount).fill(null)
  );
  const res = recursion(coins, coins.length - 1, amount, memo);
  return res === Infinity ? -1 : res;
};
