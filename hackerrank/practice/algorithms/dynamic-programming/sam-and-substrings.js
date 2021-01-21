function substrings(n) {
  const arr = []
  n.split('').forEach((d, i) => {
    if (i === 0) arr[i] = Number(d)
    else {
      arr[i] = ((i + 1) * Number(d) + 10 * arr[i-1]) % (Math.pow(10, 9) + 7)
    }
  })
  return arr.reduce((a,b) => a + b, 0) % (Math.pow(10, 9) + 7)
}
