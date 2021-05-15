/*
LeetCode > Valid Number

Tags: math, string
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  return !s.includes("Infinity") && !Number.isNaN(Number(s));
};

var isNumber = function (s) {
  return /^[+-]?((\d+\.?\d*)|(\d*\.?\d+))([eE][+-]?\d+)?$/.test(s);
};
