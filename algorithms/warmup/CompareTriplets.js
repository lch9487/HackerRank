function solve(a, b) {
  let scoreA = 0,
    scoreB = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      scoreA++;
    } else if (b[i] > a[i]) {
      scoreB++;
    }
  }

  return [scoreA, scoreB];
}
