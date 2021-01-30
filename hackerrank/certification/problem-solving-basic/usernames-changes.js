/*
HackerRank > Usernames Changes
*/

function possibleChanges(usernames) {
  return usernames.map((username) => {
    const smallest = username
      .split("")
      .sort((x, y) => x.localeCompare(y))
      .join("");
    return smallest.localeCompare(username) === 0 ? "NO" : "YES";
  });
}
