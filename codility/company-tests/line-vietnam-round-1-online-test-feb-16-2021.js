// 2 (bug fix)
function solution(S) {
  var occurrences = new Array(26);
  for (var i = 0; i < occurrences.length; i++) {
    occurrences[i] = 0;
  }

  for (var id in S) {
    occurrences[S.charCodeAt(id) - "a".charCodeAt(0)]++;
  }

  var best_char = "a";
  // below
  var best_res = -Infinity;

  // below
  for (var i = 0; i < 26; i++) {
    // below
    if (occurrences[i] > best_res) {
      best_char = String.fromCharCode("a".charCodeAt(0) + i);
      best_res = occurrences[i];
    }
  }

  return best_char;
}

// 1
function solution(N) {
  const operand = N < 0 ? -1 : 1;
  S = String(Math.abs(N));
  let max = -Infinity;
  for (let i = 0; i <= S.length; i++) {
    let temp = S.substring(0, i) + "5" + S.substring(i);
    max = Math.max(max, Number(temp) * operand);
  }
  return max;
}

// 3
function solution(S, C) {
  let res = 0;
  for (let i = 0; i < S.length - 1; i++) {
    if (S[i] === S[i + 1]) {
      res += Math.min(C[i], C[i + 1]);
    }
  }
  return res;
}

// Result: https://imgur.com/a/Bq1g2JL
