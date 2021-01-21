function solution(A) {
  let count = 0;
  const prefixZeros = A.map((a) => (count += a === 0 ? 1 : 0));
  const res = prefixZeros.reduce(
    (acc, el, i) => (acc += A[i] === 1 ? el : 0),
    0
  );
  return res > 1e9 ? -1 : res;
}
