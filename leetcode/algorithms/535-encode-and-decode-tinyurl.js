/*
LeetCode > Encode and Decode TinyURL

Tags: tags
*/

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function (longUrl) {
  return Buffer.from(longUrl).toString("base64");
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
  return Buffer.from(shortUrl, "base64").toString();
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
