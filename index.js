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
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    newArray[i][j] = Math.floor(Math.random(2) * 2);
  }
}

const nextGenArray = generateArray(columns, rows);

console.table(newArray);

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
let isCellAlive;

function isNeighbourAlive(array) {
  for (let i = 0; i < array; i++) {
    for (let j = 0; j < array; j++) {
      isCellAlive = isCellAlive[i][j];
      if (neighbours === 0 && neighbours === 3) {
        nextGenArray[i][j] = 1;
      } else if (neighbours >= 2 && neighbours < 4) {
        nextGenArray[i][j] = 1;
      } else {
        nextGenArray[i][j] = 0;
      }
    }
  }
}

console.table(isNeighbourAlive(newArray));
