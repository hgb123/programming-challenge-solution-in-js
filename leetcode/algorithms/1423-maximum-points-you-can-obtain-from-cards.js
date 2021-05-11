/*
LeetCode > Maximum Points You Can Obtain from Cards

Tags: array, dynamic programming, sliding window

Approach:
  1 2 3 4 5 6 1
  _ _ _
  _ _         _
  _         _ _
          _ _ _
*/

/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
// sliding window
var maxScore = function (cardPoints, k) {
  const N = cardPoints.length;
  let res = (sum = cardPoints.slice(0, k).reduce((acc, el) => acc + el, 0));
  for (let i = 1; i < k + 1; i++) {
    sum += cardPoints[N - i] - cardPoints[k - i];
    res = Math.max(res, sum);
  }
  return res;
};

// memoized recursion (MLE)
var maxScore = function (cardPoints, k) {
  const N = cardPoints.length;
  const memo = Array.from({ length: N }, (_) => Array(N).fill(undefined));

  const recursion = (i, j, k) => {
    if (i > N - 1 || j < 0 || k === 0) {
      return 0;
    }
    if (memo[i][j] !== undefined) {
      return memo[i][j];
    }
    return (memo[i][j] = Math.max(
      cardPoints[i] + recursion(i + 1, j, k - 1),
      cardPoints[j] + recursion(i, j - 1, k - 1)
    ));
  };

  return recursion(0, cardPoints.length - 1, k);
};
