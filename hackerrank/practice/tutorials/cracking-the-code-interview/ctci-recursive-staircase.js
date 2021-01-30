/*
HackerRank > Recursion: Davis' Staircase

Categories: recursion
*/

function stepPerms(n, memo = {}) {
  if (n < 0) {
    return 0;
  } else if (n === 0) {
    return 1;
  } else {
    if (!memo[n]) {
      memo[n] =
        stepPerms(n - 1, memo) +
        stepPerms(n - 2, memo) +
        stepPerms(n - 3, memo);
    }
    return memo[n];
  }
}
