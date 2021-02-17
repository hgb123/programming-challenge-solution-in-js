function transpose(matrix) {
  return matrix[0].map((_, colIdx) => matrix.map((row) => row[colIdx]));
}
