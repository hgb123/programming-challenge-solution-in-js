/*
LeetCode > Stamping The Sequence

Tags: string, greedy
*/

/**
 * getAllStampPatterns('abc')
 * => a**, ab*, abc, *b*, *bc, **c
 */
const getAllStampPatterns = (stamp) => {
  const stampPatterns = new Set(); // for O(1) lookup
  const stampN = stamp.length;
  for (let i = 0; i < stampN; i++) {
    for (let j = i; j < stampN; j++) {
      stampPatterns.add(
        "?".repeat(i - 0) +
          stamp.substring(i, j + 1) +
          "?".repeat(stampN - 1 - j)
      );
    }
  }
  return stampPatterns;
};

/**
 * @param {string} stamp
 * @param {string} target
 * @return {number[]}
 */
var movesToStamp = function (stamp, target) {
  const targetN = target.length;
  const stampN = stamp.length;
  const beginningSequence = "?".repeat(targetN);
  const stampPatterns = getAllStampPatterns(stamp);
  const res = [];

  checkIfAllStamped: while (target !== beginningSequence) {
    for (let i = 0; i < targetN - stampN + 1; i++) {
      const substring = target.substring(i, i + stampN);
      if (stampPatterns.has(substring)) {
        target = target.replace(substring, "?".repeat(stampN));
        res.unshift(i);
        continue checkIfAllStamped;
      }
    }

    // break when no pattern is matched
    break;
  }

  // double check
  return target !== beginningSequence ? [] : res;
};
