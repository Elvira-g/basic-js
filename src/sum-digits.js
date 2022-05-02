const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(/* n */) {
  let sum = 0;
  let argArr = arguments[0].toString().split('');

  if ( argArr.length == 1 ) {
      sum = arguments[0];
  } else {
      for ( let i = 0; i < argArr.length; i++ ) {
          sum += parseInt(argArr[i]);
      }
      return getSumOfDigits(sum)
  }
  return sum;
  // remove line with error and write your code here
}

module.exports = {
  getSumOfDigits
};
