/*
CodeSignal > firstNotRepeatingCharacter

Tags: array
*/

function firstNotRepeatingCharacter(s) {
  let res = "_";
  let charOccMap = new Map();
  for (const c of s) {
    charOccMap.set(c, (charOccMap.get(c) || 0) + 1);
  }
  for (const c of s) {
    if (charOccMap.get(c) === 1) {
      res = c;
      break;
    }
  }
  return res;
}
