/*
LeetCode > Defanging an IP Address

Tags: string
*/

var defangIPaddr = function (address) {
  return address.split(".").join("[.]");
};
