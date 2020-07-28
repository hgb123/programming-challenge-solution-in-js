function camelcase(s) {
  return 1 + s.split('').filter(c => c === c.toUpperCase()).length
}
