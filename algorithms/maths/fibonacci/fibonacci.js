export const fibonacci = n => {
  const fibSequence = [1];

  let currentValue = 1;
  let previousValue = 0;

  if (n === 1) {
    return fibSequence;
  }

  for (let i = 1; i < n; i ++ ) {
    const thisValue = currentValue;
    currentValue += previousValue;
    previousValue = thisValue;
    fibSequence.push(currentValue);
  }

  return fibSequence;
}
