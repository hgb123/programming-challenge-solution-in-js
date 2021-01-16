function jumpingOnClouds(c) {
  const splitByOne = c.map(String).join("").split("1");
  return (
    splitByOne
      .map((x) => Math.floor(x.length / 2))
      .reduce((acc, el) => acc + el, 0) +
    splitByOne.length -
    1
  );
}
