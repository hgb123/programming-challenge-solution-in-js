/*
LeetCode > Design Authentication Manager

Tags: hash table
*/

/**
 * @param {number} timeToLive
 */
var AuthenticationManager = function (timeToLive) {
  this.map = new Map();
  this.timeToLive = timeToLive;
};

/**
 * @param {string} tokenId
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.generate = function (tokenId, currentTime) {
  this.map.set(tokenId, currentTime);
};

/**
 * @param {string} tokenId
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.renew = function (tokenId, currentTime) {
  if (this.map.get(tokenId) + this.timeToLive > currentTime) {
    this.map.set(tokenId, currentTime);
  }
};

/**
 * @param {number} currentTime
 * @return {number}
 */
AuthenticationManager.prototype.countUnexpiredTokens = function (currentTime) {
  return Array.from(this.map).filter(
    ([token, time]) => time + this.timeToLive > currentTime
  ).length;
};
