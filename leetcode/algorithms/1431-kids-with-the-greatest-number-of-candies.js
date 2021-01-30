/*
LeetCode > Kids With the Greatest Number of Candies

Tags: array
*/

var kidsWithCandies = function (candies, extraCandies) {
  const max = Math.max.apply(null, candies);
  return candies.map((candy) => candy + extraCandies >= max);
};
