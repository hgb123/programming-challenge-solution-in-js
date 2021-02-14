/*
LeetCode > Shortest Path in Binary Matrix

Tags: graph, bfs
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  const N = grid.length;
  const visited = Array.from({ length: N }, (_) => Array(N).fill(false));
  const queue = [];

  if (grid[0][0] || grid[N - 1][N - 1]) {
    return -1;
  }

  visited[0][0] = true;
  queue.unshift([0, 0, 1]);
  while (queue.length) {
    const [x, y, shortest] = queue.pop();
    if (x === N - 1 && y === N - 1) {
      return shortest;
    }
    for (const [i, j] of [
      [x - 1, y - 1],
      [x - 1, y],
      [x - 1, y + 1],
      [x, y - 1],
      [x, y + 1],
      [x + 1, y - 1],
      [x + 1, y],
      [x + 1, y + 1],
    ]) {
      if (0 <= i && i < N && 0 <= j && j < N && !grid[i][j] && !visited[i][j]) {
        visited[i][j] = true;
        queue.unshift([i, j, shortest + 1]);
      }
    }
  }

  return -1;
};
