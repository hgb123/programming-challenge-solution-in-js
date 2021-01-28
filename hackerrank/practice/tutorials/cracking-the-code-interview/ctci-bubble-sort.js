/*
HackerRank > Sorting: Bubble Sort
*/

function countSwaps(a) {
  const N = a.length;
  let swapsCount = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N - 1; j++) {
      if (a[j] > a[j + 1]) {
        swapsCount++;
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
      }
    }
  }
  console.log(`Array is sorted in ${swapsCount} swaps.`);
  console.log(`First Element: ${a[0]}`);
  console.log(`Last Element: ${a[N - 1]}`);
}
