// 2
function solution(S) {
  S = S.replace(/[^0-9]/g, "");
  let temp = "";
  let res = [];
  for (const c of S) {
    temp += c;
    if (temp.length === 3) {
      res.push(temp);
      temp = "";
    }
  }
  if (temp.length === 2) {
    res.push(temp);
  } else if (temp.length === 1) {
    const top = res.pop() + temp;
    res.push(top.substring(0, 2));
    res.push(top.substring(2));
  }
  return res.join("-");
}

// 1
function solution(A, B, P) {
  const N = A.length;
  const phoneContactMap = new Map();
  for (let i = 0; i < N; i++) {
    phoneContactMap.set(B[i], A[i]);
  }
  const searchResult = B.filter((phoneNumber) => phoneNumber.includes(P))
    .map((phoneNumber) => phoneContactMap.get(phoneNumber))
    .sort((a, b) => a.localeCompare(b));
  return searchResult[0] || "NO CONTACT";
}

// 3
function solution(Y, A, B, W) {
  const getMonthIndexFromName = (monthName) =>
    ({
      January: 0,
      February: 1,
      March: 2,
      April: 3,
      May: 4,
      June: 5,
      July: 6,
      August: 7,
      September: 8,
      October: 9,
      November: 10,
      December: 11,
    }[monthName]);

  const isEqualDates = (date1, date2) => {
    return date1.getTime() === date2.getTime();
  };

  const toBeginOfWeek = (date) => {
    const day = date.getDay();
    let diff = {
      0: 1,
      1: 0,
      2: 6,
      3: 5,
      4: 4,
      5: 3,
      6: 2,
    }[day];
    return new Date(date.setDate(date.getDate() + diff));
  };

  let begin = toBeginOfWeek(new Date(Y, getMonthIndexFromName(A)));
  let end = new Date(Y, getMonthIndexFromName(B) + 1);

  let date = 0;
  while (!isEqualDates(begin, end)) {
    date++;
    begin.setDate(begin.getDate() + 1);
  }

  return Math.floor(date / 7);
}

// 4
function addEdge(adj, u, v) {
  adj[u].push(v);
  adj[v].push(u);
}

function allPaths(adj, src, dst, visited, path, ref) {
  visited[src] = true;
  path[ref.pathIndex] = src;
  ref.pathIndex++;

  if (src === dst) {
    if (!ref.res) {
      ref.res = visited.every(Boolean);
    }
  } else {
    for (const v of adj[src]) {
      if (!visited[v]) {
        allPaths(adj, v, dst, visited, path, ref);
      }
    }
  }

  ref.pathIndex--;
  visited[src] = false;
}

function solution(N, A, B) {
  const visited = Array(N).fill(false);
  const adj = Array(N)
    .fill(undefined)
    .map((_) => []);

  for (let i = 0; i < A.length; i++) {
    addEdge(adj, A[i] - 1, B[i] - 1);
  }
  const ref = { pathIndex: 0, N, res: false };
  allPaths(adj, 0, N - 1, visited, [], ref);
  return ref.res;
}

// Result: https://imgur.com/a/YRSLhW4
