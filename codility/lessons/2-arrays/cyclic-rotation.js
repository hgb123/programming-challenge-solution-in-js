function solution(A, K) {
  K = ~((K % A.length) - 1);

  return [...A.slice(K), ...A.slice(0, K)];
}
