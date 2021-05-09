/*
LeetCode > Maximum Population Year

Tags: array, hash table
*/

/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function (logs) {
  let yearPop = new Map();
  logs.forEach(([birth]) => yearPop.set(birth, 0));

  for (const [year] of yearPop) {
    for (const [birth, death] of logs) {
      if (birth <= year && year < death) {
        yearPop.set(year, yearPop.get(year) + 1);
      }
    }
  }

  const maxPop = Math.max.apply(null, [...yearPop.values()]);
  const yearsWithMaxPop = [...yearPop.entries()]
    .filter(([_, pop]) => pop === maxPop)
    .map(([year, _]) => year);

  return Math.min.apply(null, yearsWithMaxPop);
};
