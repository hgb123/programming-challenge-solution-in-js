function solution(N) {
  function perimeter(a, b) {
    return 2 * (a + b);
  }

  let min = Infinity;
  let i = 1;
  while (i * i < N) {
    if (N % i === 0) {
      min = Math.min(min, perimeter(i, N / i));
    }
    i++;
  }
  if (i * i === N) {
    min = Math.min(min, 4 * i);
  }

  return min;
}
