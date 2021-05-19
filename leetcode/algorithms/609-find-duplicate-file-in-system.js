/*
LeetCode > Find Duplicate File in System

Tags: hash table, string
*/

/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function (paths) {
  const contentPathMap = new Map();

  paths.forEach((rawPath) => {
    let [dirPath, ...files] = rawPath.split(" ");

    // extract content
    files = files.map((file) =>
      file.replace("(", " ").replace(")", "").split(" ")
    );

    files.forEach(([fileName, content]) => {
      const filePath = `${dirPath}/${fileName}`;
      if (contentPathMap.has(content)) {
        contentPathMap.get(content).push(filePath);
      } else {
        contentPathMap.set(content, [filePath]);
      }
    });
  });

  return [...contentPathMap.values()].filter(
    (filePaths) => filePaths.length > 1
  );
};
