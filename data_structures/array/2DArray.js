function array2D(arr) {
  const n = arr.length;
  const glasses = 3;
  let max = -9999999;

  for (let i = 0; i <= n - glasses; i++) {
    for (let j = 0; j <= n - glasses; j++) {
      let sum = 0;
      let initI = i;
      let initJ = j;

      sum += arr[i][j];
      j++;
      sum += arr[i][j];
      j++;
      sum += arr[i][j];
      i++, j--;
      sum += arr[i][j];
      i++, j--;
      sum += arr[i][j];
      j++;
      sum += arr[i][j];
      j++;
      sum += arr[i][j];

      max = sum > max ? sum : max;

      i = initI;
      j = initJ;
    }
  }

  return max;
}
