/*
HackerRank > Triple sum

Categories: binary search

Approach:
  First, remove duplicated elements in each array to avoid duplicated triplet
  Then
    Option 1: brute force, exhausive search by 3 nested loop to find triplet
    Option 2:
      iterate through each element of B, count the number of elements, which are less than or equal to the iterated element of B, in each A and C
      counting using binary search
*/

function binarySearch(A, x) {
  let N = A.length;
  let begin = 0;
  let end = N - 1;
  let result = -1;
  while (begin <= end) {
    let mid = Math.floor((begin + end) / 2);
    if (A[mid] <= x) {
      begin = mid + 1;
      result = mid;
    } else {
      end = mid - 1;
    }
  }
  return result + 1;
}

function triplets(a, b, c) {
  const ascSortThenUnique = (arr) =>
    Array.from(new Set(arr)).sort((a, b) => a - b);
  a = ascSortThenUnique(a);
  b = ascSortThenUnique(b);
  c = ascSortThenUnique(c);
  let res = 0;
  for (const q of b) {
    res += binarySearch(a, q) * binarySearch(c, q);
  }
  return res;
}
