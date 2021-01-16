function repeatedString(s, n) {
  const numberOfA = (str) =>
    str.split("").filter((char) => char === "a").length;
  return (
    numberOfA(s) * Math.floor(n / s.length) +
    numberOfA(s.substring(0, n % s.length))
  );
}
