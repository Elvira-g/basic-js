const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(/* arr */) {
  let arg = arguments[0];
  let result = [];
  if (!Array.isArray(arg)) {
      throw new Error ('\'arr\' parameter must be an instance of the Array!'); 
  } else {
      for ( let i = 0; i < arg.length; i++ ) {
          if ( arg[i] == '--discard-next' && arg[i+1] != undefined ) {
              let num = i;
              arg.splice(num, 2);
          } else if ( arg[i] == '--discard-prev' && arg[i] != 0 ) {
              result.pop();
          } else if ( arg[i] == '--double-next' && arg[i+1] != undefined ) {
              result.push(arg[i+1]);
          } else if ( arg[i] == '--double-prev' && i != 0 ) {
              result.push(arg[i-1]);
          } else {
              if (arg[i] != '--discard-next' && arg[i] != '--discard-prev' && arg[i] != '--double-next' && arg[i] != '--double-prev') {
                  result.push(arg[i]);
              }
              
          }
      }
  }
  return result;
  // remove line with error and write your code here
}

module.exports = {
  transform
};
