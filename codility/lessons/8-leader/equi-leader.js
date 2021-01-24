/*
Approach:
  Calculate 2 prefix leaders, for the array and its reversed
  The result is number of equal pairs
*/

function solution(A) {
  const getPrefixLeader = (A) => {
    let maxOcc, maxEl;

    let prefixLeader = Array(A.length);
    maxOcc = maxEl = -Infinity;
    A.reduce((acc, el, i) => {
      const occ = (acc[el] || 0) + 1;
      acc[el] = occ;
      if (maxOcc < occ) {
        maxOcc = occ;
        if (occ > Math.floor((i + 1) / 2)) {
          maxEl = el;
        }
      }
      if (!(maxOcc > Math.floor((i + 1) / 2))) {
        maxEl = -1;
      }

      prefixLeader[i] = maxEl;
      return acc;
    }, {});

    return prefixLeader;
  };

  const prefixLeader = getPrefixLeader(A);
  const prefixLeaderReversed = getPrefixLeader(A.reverse()).reverse();

  return prefixLeader.filter(
    (p, i) => p !== -1 && p === prefixLeaderReversed[i + 1]
  ).length;
}
