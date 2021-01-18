function solution(A) {
  const pivot = A.length + 1;
  const fullSum = ((pivot + 1) * pivot) / 2;
  const sum = A.reduce((acc, el) => acc + el, 0);
  return fullSum - sum;
}
