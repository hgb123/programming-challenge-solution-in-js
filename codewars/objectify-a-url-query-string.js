/*
CodeWars > Objectify a URL Query String
*/

// Converts a URL Query String into an object map
function convertQueryToMap(query) {
  const res = {};
  const keyValuePairs = query
    .split("&")
    .map((kvp) => kvp.split("="))
    .filter(([key]) => Boolean(key));
  for (const keyValuePair of keyValuePairs) {
    const [key, value] = keyValuePair;
    const path = key.split(".");
    let acc = res;
    for (const [i, prop] of path.entries()) {
      if (i === path.length - 1) {
        acc[prop] = decodeURIComponent(value);
        continue;
      }
      if (!acc[prop]) {
        acc[prop] = {};
      }
      acc = acc[prop];
    }
  }
  return res;
}
