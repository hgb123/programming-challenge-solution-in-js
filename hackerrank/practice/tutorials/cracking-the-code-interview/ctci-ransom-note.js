/*
HackerRank > Hash Tables: Ransom Note
*/

function checkMagazine(magazine, note) {
  const getMap = (str) =>
    str
      .join(" ")
      .split(" ")
      .filter(Boolean)
      .reduce((acc, el) => acc.set(el, (acc.get(el) || 0) + 1), new Map());
  const magazineMap = getMap(magazine);
  const noteMap = getMap(note);
  for (const [k, v] of noteMap) {
    if ((magazineMap.get(k) || 0) < v) {
      return "No";
    }
  }
  return "Yes";
}
