function sockMerchant(n, ar) {
  const group = ar.reduce((acc, el) => {
    if (acc[el]) {
      acc[el] += 1;
    } else {
      acc[el] = 1;
    }
    return acc;
  }, {});
  const values = Object.values(group);
  return values.map((v) => Math.floor(v / 2)).reduce((acc, el) => acc + el, 0);
}
