// Ref: http://www.lucainvernizzi.net/blog/2014/11/21/codility-beta-challenge-number-of-disc-intersections/

function solution(A) {
  let i = 0;

  // 1 means beginning, -1 mean ending
  const points = A.map((a, i) => [
    [i - a, 1],
    [i + a, -1],
  ])
    .reduce((acc, el) => {
      acc[i++] = el[0];
      acc[i++] = el[1];
      return acc;
    }, [])
    .sort((a, b) => a[0] - b[0] || b[1] - a[1]);

  let intersections = (activeCircles = 0);
  for (const [_, place] of points) {
    if (place === 1) {
      intersections += activeCircles;
      activeCircles += 1;
    } else {
      activeCircles -= 1;
    }
    if (intersections > 1e7) {
      return -1;
    }
  }

  return intersections;
}
