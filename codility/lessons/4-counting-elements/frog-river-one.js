function solution(X, A) {
  const set = new Set();
  for (const [i, a] of A.entries()) {
    set.add(a);
    if (set.size === X) {
      return i;
    }
  }
  return -1;
}
