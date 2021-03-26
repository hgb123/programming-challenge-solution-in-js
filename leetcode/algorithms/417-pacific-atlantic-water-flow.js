/*
LeetCode > Pacific Atlantic Water Flow

Tags: graph, dfs, bfs

Approach:
  flow backward, from pacific/atlantic
  result is the intersection
*/

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function (matrix) {
  if (matrix.length === 0) {
    return [];
  }

  const [M, N] = [matrix.length, matrix[0].length];
  const pacificVisited = new Set();
  const atlanticVisited = new Set();
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const intersection = (setA, setB) => {
    let res = new Set();
    for (let el of setB) {
      if (setA.has(el)) {
        res.add(el);
      }
    }
    return res;
  };

  const dfs = (i, j, visited) => {
    const pair = `${i}-${j}`;
    if (visited.has(pair)) {
      return;
    }
    visited.add(pair);
    for (const direction of directions) {
      const [nextI, nextJ] = [i + direction[0], j + direction[1]];
      if (
        0 <= nextI &&
        nextI < M &&
        0 <= nextJ &&
        nextJ < N &&
        matrix[nextI][nextJ] >= matrix[i][j]
      ) {
        dfs(nextI, nextJ, visited);
      }
    }
  };

  for (let row = 0; row < M; row++) {
    dfs(row, 0, pacificVisited);
    dfs(row, N - 1, atlanticVisited);
  }
  for (let col = 0; col < N; col++) {
    dfs(0, col, pacificVisited);
    dfs(M - 1, col, atlanticVisited);
  }

  return [...intersection(pacificVisited, atlanticVisited)].map((pair) =>
    pair.split("-").map(Number)
  );
};
