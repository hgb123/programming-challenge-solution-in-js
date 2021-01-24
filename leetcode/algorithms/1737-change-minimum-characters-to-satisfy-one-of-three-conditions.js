var minCharacters = function (a, b) {
  const convertToArrayOfCharCode = (str) =>
    str.split("").map((_, i) => str.charCodeAt(i) - 97);

  // min step for a < b
  const sol1 = (a, b) => {
    let res = Infinity;

    // tricky part to make it strictly "<"
    for (let i = 1; i < 26; i++) {
      let count = 0;
      for (const ai of a) count += i <= ai;
      for (const bi of b) count += i > bi;
      res = Math.min(res, count);
    }
    return res;
  };

  // min step to make a = b
  const sol3 = (a, b) => {
    let res = Infinity;

    for (let i = 0; i < 26; i++) {
      let count = 0;
      for (const ai of a) count += i !== ai;
      for (const bi of b) count += i !== bi;
      res = Math.min(res, count);
    }
    return res;
  };

  a = convertToArrayOfCharCode(a);
  b = convertToArrayOfCharCode(b);
  return Math.min(sol1(a, b), sol1(b, a), sol3(a, b));
};
