function miniMaxSum(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const sum = arr.reduce((acc, el) => acc + el, 0);
  console.log(`${sum - max} ${sum - min}`);
}
