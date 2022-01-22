function generateArray(columns, rows) {
  const gameArray = new Array(columns);
  for (let i = 0; i < gameArray.length; i++) {
    gameArray[i] = new Array(rows);
  }
  return gameArray;
}

const columns = 10;
const rows = 10;

const newArray = generateArray(columns, rows);
for (let i = 0; i < columns; i++) {
  for (let j = 0; j < rows; j++) {
    newArray[i][j] = Math.floor(Math.random(2) * 2);
  }
}
console.table(newArray);

const nextGenArray = generateArray(10, 10);

function neighbourFinder(array, y, x) {
  let neighboursCount = 0;
  neighboursCount += array[x - 1][y + 1];
  neighboursCount += array[x - 1][y];
  neighboursCount += array[x - 1][y - 1];
  neighboursCount += array[x][y - 1];
  neighboursCount += array[x + 1][y - 1];
  neighboursCount += array[x + 1][y];
  neighboursCount += array[x + 1][y + 1];
  neighboursCount += array[x][y + 1];

  return neighboursCount;
}

const neighbours = neighbourFinder(newArray, 1, 1);

function isNeighbourAlive(array) {
  let isCellAlive;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      isCellAlive = newArray[i][j];
      if (isCellAlive < 1 && neighbours === 3) {
        nextGenArray[i][j] = 1;
      } else if (neighbours >= 2 && neighbours < 4 && isCellAlive === 1) {
        nextGenArray[i][j] = 1;
      } else {
        nextGenArray[i][j] = 0;
      }
    }
  }
  return nextGenArray;
}

console.table(isNeighbourAlive(newArray));
