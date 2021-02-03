/*
CodeWars > Permutations

Tags: recursion
*/

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function genPerms(chars, left, right, set) {
  if (left === right) {
    set.add(chars.join(""));
  } else {
    for (let i = left; i <= right; i++) {
      swap(chars, left, i);
      genPerms(chars, left + 1, right, set);
      swap(chars, left, i);
    }
  }
}

function permutations(string) {
  const N = string.length;
  const chars = string.split("");
  const set = new Set();
  genPerms(chars, 0, N - 1, set);
  return Array.from(set);
}
