/*
LeetCode > Richest Customer Wealth

Tags: array
*/

var maximumWealth = function (accounts) {
  const sum = (arr) => arr.reduce((acc, el) => acc + el, 0);
  let max = -Infinity;
  for (const account of accounts) {
    max = Math.max(max, sum(account));
  }
  return max;
};
