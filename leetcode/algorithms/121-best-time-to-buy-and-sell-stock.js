/*
LeetCode > Best Time to Buy and Sell Stock

Tags: array, dynamic programming
*/

var maxProfit = function (prices) {
  const N = prices.length;
  const prefixMins = [];
  let min = Infinity;
  for (const price of prices) {
    min = Math.min(min, price);
    prefixMins.push(min);
  }
  let max = -Infinity;
  for (let i = 1; i < N; i++) {
    max = Math.max(max, prices[i] - prefixMins[i - 1]);
  }
  return max > 0 ? max : 0;
};
