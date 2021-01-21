function caesarCipher(s, k) {
  const lowerA = 'abcdefghijklmnopqrstuvwxyz'
  const upperA = lowerA.toUpperCase()

  const res = s.split('').map(c => {
    if (lowerA.includes(c)) {
      return lowerA[(lowerA.indexOf(c) + k) % 26]
    } else if (upperA.includes(c)) {
      return upperA[(upperA.indexOf(c) + k) % 26]
    } else {
      return c
    }
  })

  return res.join('')
}
