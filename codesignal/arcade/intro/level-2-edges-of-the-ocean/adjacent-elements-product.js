function adjacentElementsProduct(inputArray) {
  const arr = [];
  for (let i = 0; i < inputArray.length - 1; i++) {
    arr.push(inputArray[i] * inputArray[i + 1]);
  }
  return Math.max.apply(null, arr);
}
