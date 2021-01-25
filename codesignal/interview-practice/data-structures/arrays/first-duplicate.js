function firstDuplicate(a) {
  const elOccMap = {};
  for (const el of a) {
    elOccMap[el] = (elOccMap[el] || 0) + 1;
    if (elOccMap[el] > 1) {
      return el;
    }
  }
  return -1;
}
