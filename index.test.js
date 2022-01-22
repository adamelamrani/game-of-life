function generateArray(columns, rows) {
  const gameArray = new Array(columns);
  for (let i = 0; i < gameArray.length; i++) {
    gameArray[i] = new Array(rows);
  }

  return gameArray;
}

describe("Given a generateArray function", () => {
  describe("When it receives columns", () => {
    test("Then it should fail", () => {
      const testValue = 10;
      const expectedResult = 10;

      const expectedFunctionResult = generateArray(testValue);

      expect(expectedFunctionResult).toBe(expectedResult);
    });
  });

  describe("When it receives 1 column and 1 rows", () => {
    test("Then it should return an array of 1 * 1", () => {
      const testValue = 1;
      const testValue2 = 1;
      const expectedResult = [[]];

      const expectedFunctionResult = generateArray(testValue, testValue2);

      expect(expectedFunctionResult).toBe(expectedResult);
    });
  });
});
