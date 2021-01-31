/*
LeetCode > Goal Parser Interpretation

Tags: string
*/

var interpret = function (command) {
  return command.replace(/\(\)/g, "o").replace(/[()]/g, "");
};
