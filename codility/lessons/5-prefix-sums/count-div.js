function solution(A, B, K) {
  return Math.floor(B / K) - Math.floor(A / K) + (A % K === 0 ? 1 : 0);
}
