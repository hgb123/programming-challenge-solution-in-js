/*
LeetCode > Best Time to Buy and Sell Stock with Transaction Fee

Tags: greedy, dynamic programming, recursion

Approach:
  greedy
  dp: maximum of all possibilities when buy/sell
*/

/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
// greedy
var maxProfit = function (prices, fee) {
  const N = prices.length;
  let res = 0;
  let min = prices[0];
  for (let i = 1; i < N; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else if (prices[i] - min - fee > 0) {
      res += prices[i] - min - fee;
      min = prices[i] - fee;
      /**
       * we do not make sure i is the final point for sell
       *    so we still have to consider other i
       *    minus fee here to avoid to charge fee double charge
       *    that to understand, but in real case below, it avoids wrong new min assignment
       * for example:
       *    prices: [1, 3, 7, 5, 10, 3]
       *    fee: 3
       *
       *    intuitively seen, we buy at prices[0] of 1 and sell at prices[4] of 10
       *    result of 6
       *
       *    at prices[2], which is 7, we could sell, 7 - 1 - 3 = 3
       *    if that is the final sell, so prices[3], which is 5, will be new min
       *    so the result will be 3 + (10 - 5 - 3) = 5, which is not optimal
       *    so subtract fee here is to add a case for comparision
       *      if prices[3] of 5 is 3 instead, sale is made
       *      otherwise, continue, with a assurance that fee will not be recharge again
       */
    }
  }
  return res;
};

// dynamic programming (memoized recursion)
var maxProfit = function (prices, fee) {
  const N = prices.length;
  const mem = Array.from({ length: N }, (_) => Array(2).fill(null));

  const recursion = (day, toSell = false) => {
    if (day >= N) {
      return 0;
    }

    if (mem[day][toSell] != null) {
      return mem[day][toSell];
    }

    let [sell, buy, noop] = [0, 0, 0];
    if (toSell) {
      sell = recursion(day + 1, false) + prices[day] - fee;
    } else {
      buy = recursion(day + 1, true) - prices[day];
    }
    noop = recursion(day + 1, toSell);

    return (mem[day][toSell] = Math.max(buy, sell, noop));
  };

  return recursion(0);
};
