/*
LeetCode > Ambiguous Coordinates

Tags: string
*/

/**
 * @param {string} s
 * @return {string[]}
 */
var ambiguousCoordinates = function (s) {
  s = s.substring(1, s.length - 1);

  const generate = (s) => {
    if (s.length === 1) return [s];
    if (s.startsWith("0") && s.endsWith("0")) return [];
    if (s.startsWith("0")) return [`0.${s.substring(1)}`];
    if (s.endsWith("0")) return [s];

    const possible = [s];
    for (let i = 1; i < s.length; i++) {
      possible.push(`${s.substring(0, i)}.${s.substring(i)}`);
    }
    return possible;
  };

  const makePair = (x, y) => `(${x}, ${y})`;

  const res = [];

  for (let i = 1; i < s.length; i++) {
    for (const x of generate(s.substring(0, i))) {
      for (const y of generate(s.substring(i))) {
        res.push(makePair(x, y));
      }
    }
  }

  return res;
};
