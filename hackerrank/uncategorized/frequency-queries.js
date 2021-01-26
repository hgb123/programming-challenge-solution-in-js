/*
HackerRank > Frequency Queries

Approach:
  Dict, hash map
  One mapping element with its occurence
  One mapping occurrence with elements having that occurence
*/

function freqQuery(queries) {
  const res = [];
  const elOccMap = {};
  const occElMap = {};
  for (const [op, val] of queries) {
    switch (op) {
      case 1: {
        const curOcc = elOccMap[val];
        const newOcc = (curOcc || 0) + 1;

        if (!occElMap[curOcc]) {
          occElMap[curOcc] = new Map();
        }
        occElMap[curOcc].delete(val);
        if (!occElMap[newOcc]) {
          occElMap[newOcc] = new Map();
        }
        occElMap[newOcc].set(val, true);

        elOccMap[val] = newOcc;
        break;
      }
      case 2: {
        const curOcc = elOccMap[val];
        if (!curOcc) {
          break;
        }
        const newOcc = curOcc - 1;

        if (!occElMap[curOcc]) {
          occElMap[curOcc] = new Map();
        }
        occElMap[curOcc].delete(val);
        if (!occElMap[newOcc]) {
          occElMap[newOcc] = new Map();
        }
        occElMap[newOcc].set(val, true);

        elOccMap[val] = newOcc;
        break;
      }
      case 3: {
        if (occElMap[val] && occElMap[val].size > 0) {
          res.push(1);
        } else {
          res.push(0);
        }
        break;
      }
    }
  }
  return res;
}
