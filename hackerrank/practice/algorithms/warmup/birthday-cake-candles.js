function birthdayCakeCandles(ar) {
  const max = Math.max(...ar)
  return ar.filter(e => e === max).length
}
