export const hammingDistance = (a, b) => {
  if (a.length !== b.length) {
    return -1;
  }

  let distance = 0;
  for (let i = 0, l = a.length; i < l; i += 1) {
    if (a[i] !== b[i]) {
      distance += 1;
    }
  }
  return distance;
}
