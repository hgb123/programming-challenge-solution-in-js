/*
LeetCode > Find Center of Star Graph

Tags: graph

Approach:
  way 1: use hashmap to find the node which has edge to all others
  way 2: because there's only one center, check the first two
*/

/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
  let map = new Map();
  for (const [x, y] of edges) {
    if (!map.has(x)) {
      map.set(x, new Set());
    }
    if (!map.has(y)) {
      map.set(y, new Set());
    }
    map.set(x, map.get(x).add(y));
    map.set(y, map.get(y).add(x));
  }

  let res;
  let max = -Infinity;
  for (const [node, set] of map) {
    if (set.size > max) {
      res = node;
      max = set.size;
    }
  }

  return res;
};

var findCenter = function (edges) {
  return edges[0].filter((node) => edges[1].includes(node))[0];
};
