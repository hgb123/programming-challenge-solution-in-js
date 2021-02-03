/*
CodeWars > Moving Zeros To The End
*/

var moveZeros = function (arr) {
  const zeroes = arr.filter((el) => el === 0);
  const nonZeroes = arr.filter((el) => el !== 0);
  return [...nonZeroes, ...zeroes];
};
