function diagonalDifference(a) {
  let primarySum = 0,
    secondarySum = 0;

  for (let i = 0; i < a.length; i++) {
    primarySum += a[i][i];
  }

  for (let i = 0, j = a.length - 1; i < a.length; i++, j--) {
    secondarySum += a[i][j];
  }

  return Math.abs(primarySum - secondarySum);
}
