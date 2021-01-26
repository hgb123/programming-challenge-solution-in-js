/*
HackerRank > Arrays: Left Rotation
*/

function rotLeft(a, d) {
  d %= a.length;
  return [a.slice(d), a.slice(0, d)].flat();
}
