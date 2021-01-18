function solution(A) {
  const sum = A.reduce((acc, el) => acc + el, 0);
  let accSum = 0;
  let diff = [];
  for (const el of A) {
    accSum += el;
    diff.push(Math.abs(sum - 2 * accSum));
  }
  diff.pop();
  return Math.min.apply(null, diff);
}
