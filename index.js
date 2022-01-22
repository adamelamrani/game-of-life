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
console.table(neighbourFinder(newArray, 2, 5));
