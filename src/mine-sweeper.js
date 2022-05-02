const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(/* matrix */) {
  let arg = arguments[0];
  let lengthStr = arg.length;
  let lengthCol = arg[0].length
  let result = [];
  let str = []
  
  for ( let i = 0; i < lengthStr; i++ ) {
    str = [];
    for (let j = 0; j < lengthCol; j++) {
        str.push(0);
    }
    result.push(str);
  }

  for ( let i = 0; i < arg.length; i++ ) {
      for ( j = 0; j < arg[i].length; j++ ) {
          if ( arg[i][j] == true ) {
            if ( result[i-1] != undefined ) {
                if (result[i-1][j-1] != undefined) {
                   result[i-1][j-1] += 1; 
                }
                if (result[i-1][j] != undefined) {
                   result[i-1][j] += 1; 
                }
                if (result[i-1][j+1] != undefined) {
                    result[i-1][j+1] += 1; 
                }
            }
            if ( result[i+1] != undefined ) {
                if (result[i+1][j-1] != undefined) {
                   result[i+1][j-1] += 1; 
                }
                if (result[i+1][j] != undefined) {
                   result[i+1][j] += 1; 
                }
                if (result[i+1][j+1] != undefined) {
                    result[i+1][j+1] += 1;
                }
            }
            if (result[i][j-1] != undefined) {
                result[i][j-1] += 1;
            }
            if (result[i][j+1] != undefined) {
                result[i][j+1] += 1;
            }
            
        }
      }
  }

  return result
  // remove line with error and write your code here
}

module.exports = {
  minesweeper
};
