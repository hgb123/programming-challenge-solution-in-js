/*
HackerRank > Strings: Making Anagrams

Approach:
  Maintain array of character's occurence for each string
  The result is the sum of subtractions of each string's character
*/

function makeAnagram(a, b) {
  const N = 26;
  const getCharOcc = (str) => {
    const occ = Array(N).fill(0);
    str.split("").forEach((_, i) => occ[str.charCodeAt(i) - 97]++);
    return occ;
  };
  const charOccA = getCharOcc(a);
  const charOccB = getCharOcc(b);
  let res = 0;
  for (let i = 0; i < N; i++) {
    res += Math.abs(charOccA[i] - charOccB[i]);
  }
  return res;
}
