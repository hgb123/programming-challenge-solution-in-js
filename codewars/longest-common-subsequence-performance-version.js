/*
CodeWars > Longest Common Subsequence (Performance version)
*/

var recursion = function (text1, text2, i, j, memo) {
  if (memo[i][j] !== null) {
    return memo[i][j];
  }

  if (i === 0 || j === 0) {
    memo[i][j] = "";
  } else if (text1[i - 1] === text2[j - 1]) {
    memo[i][j] = text1[i - 1] + recursion(text1, text2, i - 1, j - 1, memo);
  } else {
    let [one, two] = [
      recursion(text1, text2, i, j - 1, memo),
      recursion(text1, text2, i - 1, j, memo),
    ];
    if (one.length > two.length) {
      memo[i][j] = one;
    } else {
      memo[i][j] = two;
    }
  }

  return memo[i][j];
};

function lcs(x, y) {
  let memo = Array.from({ length: x.length + 1 }, (_, i) =>
    Array(y.length + 1).fill(null)
  );
  const res = recursion(x, y, x.length, y.length, memo);
  return res.split("").reverse().join("");
}
