function solution(A) {
  if (A.length < 3) {
    return 0;
  }
  function isTriangle(a, b, c) {
    return (a > 0) & (b > 0) & (c > 0) && a + b > c && a + c > b && b + c > a;
  }
  A.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < A.length - 2; i++) {
    if (!isTriangle(A[i], A[i + 1], A[i + 2])) {
      count++;
    }
  }
  return count === A.length - 2 ? 0 : 1;
}
