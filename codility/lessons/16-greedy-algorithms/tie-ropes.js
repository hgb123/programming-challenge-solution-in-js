/*
Codility > TieRopes
Tie adjacent ropes to achieve the maximum number of ropes of length >= K.

Categories: greedy

Approach:
  Accumulated sum, reset when exceed K
*/

function solution(K, A) {
  let sum = 0;
  let res = 0;
  for (const a of A) {
    sum += a;
    if (sum >= K) {
      res++;
      sum = 0;
    }
  }
  return res;
}
