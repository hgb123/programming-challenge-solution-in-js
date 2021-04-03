/*
LeetCode > Determine Color of a Chessboard Square

Tags: string
*/

/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
  const [a, b] = [
    (coordinates[0].charCodeAt(0) - 97) % 2 === 0,
    +coordinates[1] % 2 === 0,
  ];
  return !Boolean(a ^ b);
};
