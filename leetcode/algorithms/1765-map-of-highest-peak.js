/*
LeetCode > Map of Highest Peak

Tags: graph, bfs
*/

/**
 * @param {number[][]} isWater
 * @return {number[][]}
 */
var highestPeak = function (isWater) {
  const [M, N] = [isWater.length, isWater[0].length];
  const visited = Array.from({ length: M }, (_) => Array(N).fill(false));
  const res = Array.from({ length: M }, (_) => Array(N).fill(0));

  let queue = isWater
    .flatMap((row, i) => row.map((col, j) => [i, j]))
    .filter(([i, j]) => isWater[i][j]);
  queue.forEach(([i, j]) => (visited[i][j] = true));

  let height = 0;
  while (queue.length) {
    let temp = [];

    for (const [i, j] of queue) {
      res[i][j] = height;
      for (const [adjacentI, adjacentJ] of [
        [i - 1, j],
        [i + 1, j],
        [i, j - 1],
        [i, j + 1],
      ]) {
        if (
          0 <= adjacentI &&
          adjacentI < M &&
          0 <= adjacentJ &&
          adjacentJ < N &&
          !visited[adjacentI][adjacentJ]
        ) {
          visited[adjacentI][adjacentJ] = true;
          temp.push([adjacentI, adjacentJ]);
        }
      }
    }

    queue = temp;
    height++;
  }

  return res;
};
