/*
Approach:
  Hash table with key-value of element and its occurences
*/

function solution(A) {
  const elOccMap = A.reduce(
    (acc, el) => acc.set(el, (acc.get(el) || 0) + 1),
    new Map()
  );
  for (const [k, v] of elOccMap) {
    if (v > Math.floor(A.length / 2)) {
      return A.findIndex((el) => el === k);
    }
  }
  return -1;
}
