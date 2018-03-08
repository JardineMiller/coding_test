// Recommended node version at least v8.9.4 LTS
// To run `node problem.js` or if you want output of success failure
// Run `node problem.js && echo "PASS" || echo "FAIL"`

// Test examples use `assert` module https://nodejs.org/api/assert.html
const assert = require("assert");

const diagonalDifference = matrix => {
  let primary = calculateDiagonal(matrix, true);
  let secondary = calculateDiagonal(matrix, false);
  return Math.abs(primary - secondary);
};

const calculateDiagonal = (matrix, isPrimary) => {
  let array = determineDirection(matrix, isPrimary);
  return calculateTotal(array);
};

const determineDirection = (matrix, isPrimary) => {
  if (isPrimary) return matrix;
  return [...matrix].reverse();
};

const calculateTotal = (matrix) => {
  let index = 0;
  let total = 0;
  for(row of matrix) {
    total += row[index];
    index++;
  }
  return total;
};



const threeByThree = [
  [1, 1, 1], 
  [2, 2, 2], 
  [3, 3, 3]
];

const anotherThreeByThree = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, -3]
];

const sixBySix = [
  [1, 2, 3, 2, 4, 2], 
  [1, 9, 1, 2, 4, 6],
  [1, 1, 5, 2, 4, 2],
  [1, 1, 3, 4, 4, 1], 
  [1, 2, 1, 2, 7, 4],
  [1, 9, 6, 4, 4, 2]
];

const negativeThreeByThree = [
  [-6, -2, -5], 
  [-1, -2, -7], 
  [-3, -3, -3]
];

assert.equal(calculateDiagonal(sixBySix, true), 28);
assert.equal(calculateDiagonal(sixBySix, false), 14);

assert.equal(diagonalDifference(negativeThreeByThree), 1);
assert.equal(diagonalDifference(sixBySix), 14);
assert.equal(diagonalDifference(threeByThree), 0);
assert.equal(diagonalDifference(anotherThreeByThree), 6);