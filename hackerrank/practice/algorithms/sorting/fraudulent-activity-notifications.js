/*
HackerRank > Fraudulent Activity Notifications

Approach:
  Counting sort (because the elements is in specific range)
  We only need the middle element so we skip the array building from count table

References:
  https://www.geeksforgeeks.org/counting-sort/
*/

function activityNotifications(expenditure, d) {
  const RANGE = 201;
  let notifications = 0;
  const getDoubleMedian = (count, d) => {
    const N = count.length;
    const countPrefix = Array.from(count);
    for (let i = 0; i < N; i++) {
      countPrefix[i] += countPrefix[i - 1] || 0;
    }
    let a = 0;
    let b = 0;

    // only need the middle elements, so skip build the array to avoid TLE
    if (d % 2 === 0) {
      let first = Math.floor(d / 2);
      let second = first + 1;
      let i = 0;
      for (; i < RANGE; i++) {
        if (first <= countPrefix[i]) {
          a = i;
          break;
        }
      }
      for (; i < RANGE; i++) {
        if (second <= countPrefix[i]) {
          b = i;
          break;
        }
      }
    } else {
      let first = Math.floor(d / 2) + 1;
      for (let i = 0; i < RANGE; i++) {
        if (first <= countPrefix[i]) {
          a = i;
          b = i;
          break;
        }
      }
    }

    return a + b;
  };

  //
  const count = Array(RANGE).fill(0);
  for (let i = 0; i < d; i++) {
    count[expenditure[i]]++;
  }

  for (let i = d; i < expenditure.length; i++) {
    const median = getDoubleMedian(count, d);
    if (expenditure[i] >= median) {
      notifications++;
    }

    // update el count table
    count[expenditure[i]]++;
    count[expenditure[i - d]]--;
  }

  return notifications;
}
