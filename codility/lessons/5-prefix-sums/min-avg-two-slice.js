function solution(A) {
  let min = (minI = Infinity);
  for (let i = 0; i < A.length - 1; i++) {
    const avg = (A[i] + A[i + 1]) / 2;
    if (avg < min) {
      min = avg;
      minI = i;
    }
  }
  for (let i = 0; i < A.length - 2; i++) {
    const avg = (A[i] + A[i + 1] + A[i + 2]) / 3;
    if (avg < min) {
      min = avg;
      minI = i;
    }
  }
  return minI;
}
