/*
LeetCode > Search Suggestions System

Tags: string
*/

/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
 var suggestedProducts = function (products, searchWord) {
  products.sort((productA, productB) => productA.localeCompare(productB));

  const prefixResults = new Map();
  products.forEach((product) => {
    let term = "";
    for (const char of product) {
      term += char;
      if (prefixResults.has(term) === false) {
        prefixResults.set(term, []);
      }

      prefixResults.get(term).push(product);
    }
  });

  const res = [];
  let searchTerm = "";
  for (const char of searchWord) {
    searchTerm += char;
    res.push((prefixResults.get(searchTerm) || []).slice(0, 3));
  }

  return res;
};
