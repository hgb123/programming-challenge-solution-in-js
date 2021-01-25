/*
References:
  https://rafal.io/posts/codility-peaks.html
*/
function solution(A) {
  const N = A.length;
  const isPeak = (a, b, c) => a < b && b > c;

  const peaks = [];
  for (let i = 1; i < N - 1; i++) {
    if (isPeak(A[i - 1], A[i], A[i + 1])) {
      peaks.push(i);
    }
  }

  for (let blockSize = 1; blockSize <= N; blockSize++) {
    if (N % blockSize !== 0) {
      continue;
    }
    let quotient = 0;
    const numberOfBlocks = Math.floor(N / blockSize);
    let valid = true;
    for (const peakIndex of peaks) {
      if (Math.floor(peakIndex / blockSize) === quotient) {
        quotient++;
      }
    }

    // make sure each block have at least 1 peak
    if (quotient !== numberOfBlocks) {
      valid = false;
    }
    if (valid) return numberOfBlocks;
  }
  return 0;
}
