function solve(strings, queries) {
  let results = [];

  for (let query of queries) {
    let count = 0;
    for (let string of strings) {
      if (string === query) {
        count++;
      }
    }
    results.push(count);
  }

  return results;
}
