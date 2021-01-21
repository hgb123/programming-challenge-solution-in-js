function gameOfThrones(s) {
  const lookup = {}
  for (const c of s) {
    lookup[c] = (lookup[c] || 0) + 1
  }
  const occurrences = Object.values(lookup)
  const numOfOdd = occurrences.filter(i => i % 2 !== 0).length

  return  numOfOdd <= 1 ? 'YES' : 'NO'
}
