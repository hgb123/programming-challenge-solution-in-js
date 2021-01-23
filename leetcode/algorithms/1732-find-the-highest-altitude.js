/*
Approach:
  Accumulated sum
  The result will appear on the way
*/

var largestAltitude = function (gain) {
  let sum = 0;
  let max = sum;
  for (const g of gain) {
    sum += g;
    if (sum > max) {
      max = sum;
    }
  }
  return max;
};
