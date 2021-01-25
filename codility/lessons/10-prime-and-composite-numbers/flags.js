/*
Approach:
  (Flag is on the peak only)
  Maximum number of peaks is upper bound of sqrt(N) (N is the length of A)
  Get an array of peaks to determine whether an index is peak
  Decrease from max peaks, for each iteration, check if that the number of peak is valid
    The number of peak is whether valid or not is based on the condition: distance between any 2 flag should be >= number of flags

References:
  https://codility.com/media/train/solution-flags.pdf
*/

function solution(A) {
  const N = A.length;
  const isPeak = (a, b, c) => a < b && b > c;
  const checkFlagsValid = (flags, peaks) => {
    const N = peaks.length;
    let flagsLeft = flags;
    let i = 1;
    while (i < N - 1 && flagsLeft) {
      if (peaks[i]) {
        flagsLeft -= 1;
        i += flags;
      } else {
        i += 1;
      }
    }
    return flagsLeft === 0;
  };

  const peaks = Array(N).fill(false);
  let peaksCount = 0;
  for (let i = 1; i < N - 1; i++) {
    if (isPeak(A[i - 1], A[i], A[i + 1])) {
      peaksCount++;
      peaks[i] = true;
    }
  }

  let maxFlags = Math.min(Math.ceil(Math.sqrt(N)), peaksCount);
  while (maxFlags) {
    if (checkFlagsValid(maxFlags, peaks)) {
      break;
    }
    maxFlags--;
  }
  return maxFlags;
}
