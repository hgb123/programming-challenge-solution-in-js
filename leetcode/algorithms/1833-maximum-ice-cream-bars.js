/*
LeetCode > Maximum Ice Cream Bars

Tags: array, sort
*/

/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
  costs = costs.sort((a, b) => a - b);
  let res = 0;
  for (const cost of costs) {
    if (coins < cost) {
      break;
    }
    res++;
    coins -= cost;
  }
  return res;
};
