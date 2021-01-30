/*
HackerRank > Max Array Sum

Categories: dynamic programming

Approach:
  A subset can be one element only
  Base cases:
    max at 0 is max(arr[0], 0)
    max at 1 is max(arr[0], arr[1], 0)
  Then cases:
    max at i is max(arr[i], maxAt[i - 1], maxAt[i - 2] + arr[i], 0)
  Tail 0 on every max because negative value is rejected
*/

function maxSubsetSum(arr) {
  const N = arr.length;
  const maxes = Array(N).fill(0);

  maxes[0] = Math.max(arr[0], 0);
  maxes[1] = Math.max(arr[0], arr[1], 0);
  for (let i = 2; i < N; i++) {
    maxes[i] = Math.max(arr[i], maxes[i - 1], maxes[i - 2] + arr[i], 0);
  }

  return maxes[N - 1];
}
