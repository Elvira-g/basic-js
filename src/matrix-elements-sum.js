const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(/* matrix */) {
  let matrix = arguments[0];
  let sum = 0;
  let columnsArr = [];
  let column = [];
  let y = 0;

  for ( let i = 0; i < matrix[0].length; i++ ) {
      for ( let t = 0; t < matrix.length; t++ ) {
          column.push(matrix[t][y])
      }
      columnsArr.push(column);
      column = [];
      y += 1;
  }
  for ( let i = 0; i < columnsArr.length; i++ ) {
      for ( j = 0; j < columnsArr[i].length; j++ ) {
          if ( columnsArr[i][j-1] != 0 ) {
              sum += columnsArr[i][j];
          }
      }
  }

 return sum
  // remove line with error and write your code here
}

module.exports = {
  getMatrixElementsSum
};
