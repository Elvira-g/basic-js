const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(/* str */) {
  let arg = arguments[0].split('');
  let count = 1;
  let arr = [];
  let resultArr = [];

  for ( let i = 0; i < arg.length; i++ ) {
      if (arr[arr.length-1] == arg[i]) {
         count += 1;
         resultArr[resultArr.length-1] = `${count}${arg[i]}`
      } else {
          count = 1;
         arr.push(arg[i]);
         resultArr.push(arg[i]);
      }
  }

  return resultArr.join('')
 
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};
