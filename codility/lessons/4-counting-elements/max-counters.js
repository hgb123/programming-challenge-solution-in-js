function solution(X, A) {
  let res = Array(X).fill(0);
  let max = 0;
  let latestMax = 0;
  for (const a of A) {
    if (1 <= a && a <= X) {
      if (res[a - 1] < latestMax) {
        res[a - 1] = latestMax;
      }
      res[a - 1] += 1;
      if (res[a - 1] > max) {
        max = res[a - 1];
      }
    } else {
      latestMax = max;
    }
  }
  for (const [i, r] of res.entries()) {
    if (r < latestMax) {
      res[i] = latestMax;
    }
  }
  return res;
}
