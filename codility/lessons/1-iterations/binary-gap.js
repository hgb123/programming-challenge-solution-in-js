function solution(N) {
  let tempN = N;
  let max = 0;
  let curr = 0;
  let numOfOne = 0;
  while (tempN > 0) {
    let rmd = Math.floor(tempN % 2);
    if (rmd === 1) {
      numOfOne += 1;
      if (numOfOne === 2) {
        if (curr > max) {
          max = curr;
        }

        // reset
        numOfOne = 1;
        curr = 0;
      }
    } else if (rmd === 0 && numOfOne === 1) {
      curr += 1;
    }
    tempN = Math.floor(tempN / 2);
  }
  return max;
}
