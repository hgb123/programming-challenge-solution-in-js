var canFormArray = function (arr, pieces) {
  const arrS = `-${arr.join("-")}-`;
  const piecesS = pieces.map((p) => `-${p.join("-")}-`);
  return piecesS.every((p) => arrS.includes(p));
};
