/*
HackerRank > Mark and Toys
Approach:
  Sorting
  Prefix sums
*/

function maximumToys(prices, k) {
  prices.sort((a, b) => a - b);
  let sum = 0;
  const prefixSums = prices.map((price) => {
    sum += price;
    return sum;
  });
  let numberOfToyes;
  for (let i = 0; i < prefixSums.length; i++) {
    if (prefixSums[i] > k) {
      numberOfToyes = i;
      break;
    }
  }
  return numberOfToyes;
}
