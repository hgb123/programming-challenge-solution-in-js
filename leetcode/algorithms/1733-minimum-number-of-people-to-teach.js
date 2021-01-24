function intersection(setA, setB) {
  let _intersection = new Set();
  for (let elem of setB) {
    if (setA.has(elem)) {
      _intersection.add(elem);
    }
  }
  return _intersection;
}

var minimumTeachings = function (n, languages, friendships) {
  languages = languages.map((l) => new Set(l));
  const conflictUsers = new Set();
  for (let [i, j] of friendships) {
    if (!intersection(languages[i - 1], languages[j - 1]).size) {
      conflictUsers.add(i - 1);
      conflictUsers.add(j - 1);
    }
  }
  const languageCount = Array(n).fill(0);
  for (const user of conflictUsers) {
    for (const language of languages[user]) {
      languageCount[language - 1]++;
    }
  }
  return conflictUsers.size - Math.max.apply(null, languageCount);
};
