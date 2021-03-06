/*
LeetCode > Find Nearest Point That Has the Same X or Y Coordinate

Tags: array
*/

/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function (x, y, points) {
  const calculateDist = (p1, p2) =>
    Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1]);
  const validPointsWithIndex = points
    .map((point, i) => [point, i])
    .filter(([[pX, pY]]) => pX === x || pY === y);
  let min = Infinity;
  let minIndex = -1;
  for (let i = 0; i < validPointsWithIndex.length; i++) {
    const dist = calculateDist(validPointsWithIndex[i][0], [x, y]);
    if (dist < min) {
      min = dist;
      minIndex = validPointsWithIndex[i][1];
    }
  }
  return minIndex;
};
