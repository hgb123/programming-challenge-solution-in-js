/*
CodeWars > One Line Task: Check Range

Approach:
  i < x == i > y:
    if both false, then condition will be true
    there will be no both true on both, so other will result in false
  map here is just for iterating, the point here is accumulated c
  array|c to grab c, because binary representation of array (NaN) OR a number will always result in that number
*/

// prettier-ignore
checkRange=(a,x,y,c=0)=>a.map(i=>c+=i<x==i>y)|c
