/*
CodeWars > The soul of wit: reverse an array

Approach:
  param1: a.pop is like passing the Array.prototype.pop, so it misses the context
  param2: a is the complement context
  [...a]: to make sure mutate in callback does not affect the loop times
*/

// prettier-ignore
reverse=a=>[...a].map(a.pop,a)
