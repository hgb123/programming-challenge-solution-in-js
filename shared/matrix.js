function transpose(arrOfArr) {
  const N = arrOfArr.length;
  const M = arrOfArr[0].length;
  const res = [];
  for (let i = 0; i < M; i++) {
    let temp = [];
    for (let j = 0; j < N; j++) {
      temp.push(arrOfArr[j][i]);
    }
    res.push(temp);
  }
  return res;
}
