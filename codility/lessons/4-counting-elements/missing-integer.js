function solution(A) {
  const set = new Set(A.filter((a) => a > 0));
  let i = 0;
  while (true) {
    if (!set.has(++i)) {
      return i;
    }
  }
}
