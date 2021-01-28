/*
HackerRank > Sherlock and the Valid String

Approach:
  Build 2 hash map of
    occurence of character
    occurence of occurence
  Work on the hash map of occurence of occurence
    always YES if the hash map size is 1
    always NO if the hash map size is different from 2
    with case of hash map size of 2
      always YES if one of the pair is [1, 1]
      always YES if one pair's value is one and subtract of its key and the other is 1
      the rest is NO
*/

function isValid(s) {
  const charOccMap = new Map();
  const occOccMap = new Map();
  s.split("").forEach((c) => charOccMap.set(c, (charOccMap.get(c) || 0) + 1));
  Array.from(charOccMap.values()).forEach((occ) =>
    occOccMap.set(occ, (occOccMap.get(occ) || 0) + 1)
  );

  if (occOccMap.size === 1) {
    return "YES";
  }
  if (occOccMap.size !== 2) {
    return "NO";
  }
  const validPairCase1 = (pair1, pair2) =>
    pair1[1] === 1 && pair1[0] - pair2[0] === 1;
  const validPairCase2 = (pair1, pair2) =>
    (pair1[0] === 1 && pair1[1] === 1) || (pair2[0] === 1 && pair2[1] === 1);
  const [occX, occY] = Array.from(occOccMap);
  return validPairCase1(occX, occY) ||
    validPairCase1(occY, occX) ||
    validPairCase2(occX, occY)
    ? "YES"
    : "NO";
}
