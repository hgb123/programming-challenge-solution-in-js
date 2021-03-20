/*
LeetCode > Keys and Rooms

Tags: dfs, graph
*/

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  const N = rooms.length;
  const visited = Array(N).fill(false);

  const dfs = (roomIndex) => {
    if (visited[roomIndex]) {
      return;
    }
    visited[roomIndex] = true;
    for (const roomKey of rooms[roomIndex]) {
      dfs(roomKey);
    }
  };

  dfs(0);

  return visited.filter(Boolean).length === N;
};
