/*
HackerRank > Alternating Characters
*/

function alternatingCharacters(s) {
  s = s.split("");
  const N = s.length;
  let res = 0;
  for (let i = 0; i < N - 1; i++) {
    if (s[i] === s[i + 1]) {
      res++;
    }
  }
  return res;
}
