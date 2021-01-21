function solution(S, P, Q) {
  const subtract = (y, x) => ({
    A: y.A - x.A,
    C: y.C - x.C,
    G: y.G - x.G,
    T: y.T - x.T,
  });
  const lowerBound = { A: 0, C: 0, G: 0, T: 0 };
  const accumulatedNucleotideOccurence = { ...lowerBound };
  const nucleotideOccurences = S.split("").map((c) => {
    accumulatedNucleotideOccurence[c]++;
    return { ...accumulatedNucleotideOccurence };
  });
  const res = P.map((p, i) =>
    subtract(
      nucleotideOccurences[Q[i]],
      p === 0 ? lowerBound : nucleotideOccurences[p - 1]
    )
  ).map((nuOc) => (nuOc.A ? 1 : nuOc.C ? 2 : nuOc.G ? 3 : 4));

  return res;
}
