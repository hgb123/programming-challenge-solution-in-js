function solution(A) {
  const group = A.reduce((acc, el) => {
    acc.set(el, (acc.get(el) || 0) + 1);
    return acc;
  }, new Map());
  for (const g of group) {
    if (g[1] % 2 !== 0) {
      return g[0];
    }
  }
}
