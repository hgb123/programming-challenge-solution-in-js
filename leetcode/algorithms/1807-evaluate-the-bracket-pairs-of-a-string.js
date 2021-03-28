/*
LeetCode > Evaluate the Bracket Pairs of a String

Tags: hash table, string
*/

/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function (s, knowledge) {
  const dict = knowledge.reduce(
    (acc, el) => acc.set(`(${el[0]})`, el[1]),
    new Map()
  );
  const N = s.length;
  let tokens = [];
  let token = "";
  for (let i = 0; i < N; i++) {
    if (s[i] === "(") {
      tokens.push(token);
      token = "";
    }
    token += s[i];
    if (s[i] === ")") {
      tokens.push(token);
      token = "";
    }
  }
  if (token) {
    tokens.push(token);
  }

  return tokens
    .filter(Boolean)
    .map((token) => (token[0] === "(" ? dict.get(token) || "?" : token))
    .join("");
};
