function palindromeIndex(s) {
  function isPalindrome(s) {
    for (let i = 0; i < Math.floor(s.length / 2); i++) {
      if (s[i] !== s[s.length - i -1]) {
        return false
      }
    }
    return true
  }

  let res = -1

  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s[i] !== s[s.length - i -1]) {
      const tmp = s.substring(0, i) + s.substring(i + 1)
      if (isPalindrome(tmp)) {
        return i
      } else {
        return s.length - i - 1
      }
    }

  }

  return -1
}
