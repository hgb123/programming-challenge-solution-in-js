/*
HackerRank > Hash Tables: Ice Cream Parlor

Categories: hash map
*/

function whatFlavors(cost, money) {
  const elIdxMap = cost.reduce((acc, el, i) => {
    const elIdxs = acc.get(el) || [];
    elIdxs.push(i);
    elIdxs.sort((a, b) => a - b);
    acc.set(el, elIdxs);
    return acc;
  }, new Map());
  for (let i = 0; i < cost.length; i++) {
    const restEl = money - cost[i];
    const restElIdxs = elIdxMap.get(restEl);

    if (!restElIdxs) {
      continue;
    }

    if (restEl === cost[i]) {
      if (restElIdxs.length === 1) {
        continue;
      } else {
        return [i + 1, restElIdxs[1] + 1];
      }
    }

    return [i + 1, restElIdxs[0] + 1];
  }
}
