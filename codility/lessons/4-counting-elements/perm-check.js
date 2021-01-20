function solution(A) {
  const set = new Set(A);
  const max = Math.max.apply(null, Array.from(set));
  const cond = set.size === max && max === A.length;
  return cond ? 1 : 0;
}
