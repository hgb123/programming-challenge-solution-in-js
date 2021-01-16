function countingValleys(steps, path) {
  let res = 0;
  let curr = 0;
  const splitedPath = path.split("");
  const mapped = [0, ...splitedPath.map((p) => (curr += { U: 1, D: -1 }[p]))];
  let i = 0;
  while (i < steps) {
    if (mapped[i] === 0) {
      while (mapped[++i] !== 0 && i < steps) {}
      if (mapped[i - 1] < 0) res++;
    }
  }
  return res;
}
