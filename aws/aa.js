const spreadHours = (rows, columns, grid) => {
  let hours = 0;
  while (checkNeedToSpread(rows, columns, grid)) {
    hours += 1;
    spreadOperation(rows, columns, grid);
  }
  return hours;
}

const checkNeedToSpread = (rows, columns, grid) => {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const element = grid[i][j];
      if (element === 0) return true;
    }
  }
  return false;
}

const spreadOperation = (rows, columns, grid) => {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const element = grid[i][j];
      if (element === 1) {
        const { up, down, left, right } = getValidPosition(i, j, rows, columns);
        setReadyToSpread(grid, up);
        setReadyToSpread(grid, down);
        setReadyToSpread(grid, left);
        setReadyToSpread(grid, right);
      }
    }
  }
  setReceived(rows, columns, grid);
}

const getValidPosition = (i, j, rows, columns) => {
  const up = (i - 1) >= 0 ? [i - 1, j] : null;
  const down = (i + 1) < rows ? [i + 1, j] : null;
  const left = (j - 1) >= 0 ? [i, j - 1] : null;
  const right = (j + 1) < columns ? [i, j + 1] : null;
  return {
    up, down, left, right
  }
}

const READY_TO_RECEIVE = 0.5;

const setReadyToSpread = (grid, direction) => {
  if (!direction) return;
  const [x, y] = direction;
  if (grid[x][y] === 0) grid[x][y] = READY_TO_RECEIVE;
}

const setReceived = (rows, columns, grid) => {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const element = grid[i][j];
      if (element === READY_TO_RECEIVE) grid[i][j] = 1;
    }
  }
}

const hours = spreadHours(4, 5, [
  [0, 1, 1, 0, 1],
  [0, 1, 0, 1, 0],
  [0, 0, 0, 0, 1],
  [0, 1, 0, 0, 0]
]);

console.log('Hours::', hours);