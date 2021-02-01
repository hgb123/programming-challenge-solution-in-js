/*
LeetCode > Best Time to Buy and Sell Stock II

Tags: array, greedy
*/

var maxProfit = function (prices) {
  const N = prices.length;
  let profit = 0;
  for (let i = 1; i < N; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }
  return profit;
};
