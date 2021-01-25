/*
Approach:
  If number a is a divisor of n, then n/a is also a divisor.
  One of these two divisors is less than or equal to sqrt(n).
  This could be proven by contradictory. Assume if that were not the case, n would be a product of two numbers greater than sqrt(n), which is impossible.
*/

function solution(N) {
  let result = 0;
  let i = 1;
  while (i * i < N) {
    if (N % i === 0) {
      result += 2;
    }
    i++;
  }
  if (i * i === N) {
    result++;
  }

  return result;
}
