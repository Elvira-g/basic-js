const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(/* n */) {
  let length = arguments[0].toString().length;
  let arr = [];

  for ( let i = 0; i < length; i++ ) {
      let number = arguments[0].toString().split('');
      number.splice(i, 1);
      let item = number.join('');
      arr.push(parseInt(item));
  }
  
  arr.sort((a,b)=> b - a );

  return arr[0];
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
