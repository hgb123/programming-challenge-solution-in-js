function hackerrankInString(s) {
  return /.*[h].*[a].*[c].*[k].*[e].*[r].*[r].*[a].*[n].*[k].*/gi.test(s) ? 'YES' : 'NO'
}
