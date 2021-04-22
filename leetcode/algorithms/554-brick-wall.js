/*
LeetCode > Brick Wall

Tags: hash table

Approach
  bricks: [1, 2, 2, 1]
  edges: [1, 3, 5] (reject last one)
  min cross brick = number of wall - maximum crossed edges
*/

/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function (wall) {
  const edges = wall.flatMap((w) => {
    w.pop();
    let sum = 0;
    for (let i = 0; i < w.length; i++) {
      w[i] += w[i - 1] || 0;
      sum += w[i];
    }
    return w;
  });

  const occurrences = Array.from(
    edges
      .reduce((acc, el) => acc.set(el, (acc.get(el) || 0) + 1), new Map())
      .values()
  );

  return wall.length - Math.max.apply(null, [0, ...occurrences]);
};
