/*
LeetCode > Is Graph Bipartite?

Tags: graph, bfs, dfs
*/

/**
 * @param {number[][]} graph
 * @return {boolean}
 */

const isValid = function (graph, nodeColors, colorToCheck, node) {
  if (nodeColors[node] !== 0) {
    return nodeColors[node] === colorToCheck;
  }
  nodeColors[node] = colorToCheck;
  for (const adjacentNode of graph[node]) {
    // this is why using color of 1 and -1
    if (!isValid(graph, nodeColors, -colorToCheck, adjacentNode)) {
      return false;
    }
  }
  return true;
};

var isBipartite = function (graph) {
  const N = graph.length;
  // 0: no color, 1: blue, -1: red
  const nodeColors = Array(N).fill(0);

  // for the case of disconnected graph, check every nodes
  for (let node = 0; node < N; node++) {
    // check if colored yet is equivalent to check if visited yet
    if (nodeColors[node] === 0 && !isValid(graph, nodeColors, 1, node)) {
      return false;
    }
  }

  return true;
};
