/*
LeetCode > Closest Dessert Cost

Tags: recursion, greedy

Approach:
  exhausive search through all possibilities of topping (0, 1, 2) for each
*/

function recursion(cost, toppingCosts, toppingCostsIdx, target, ref) {
  if (toppingCostsIdx === toppingCosts.length) {
    const diff = Math.abs(target - cost);
    if (diff <= ref.minDiff) {
      ref.cost = diff === ref.minDiff ? Math.min(ref.cost, cost) : cost;
      ref.minDiff = diff;
    }
  } else {
    recursion(
      cost + toppingCosts[toppingCostsIdx] * 0,
      toppingCosts,
      toppingCostsIdx + 1,
      target,
      ref
    );
    recursion(
      cost + toppingCosts[toppingCostsIdx] * 1,
      toppingCosts,
      toppingCostsIdx + 1,
      target,
      ref
    );
    recursion(
      cost + toppingCosts[toppingCostsIdx] * 2,
      toppingCosts,
      toppingCostsIdx + 1,
      target,
      ref
    );
  }
}

/**
 * @param {number[]} baseCosts
 * @param {number[]} toppingCosts
 * @param {number} target
 * @return {number}
 */
var closestCost = function (baseCosts, toppingCosts, target) {
  const ref = { minDiff: Infinity, cost: Infinity };
  for (const baseCost of baseCosts) {
    recursion(baseCost, toppingCosts, 0, target, ref);
  }
  return ref.cost;
};
