const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(/* s1, s2 */) {
  const arg1 = arguments[0];
  const arg2 = arguments[1];
  let checkStr;
  let testStr;

  if ( arg1.length >= arg2.length ) {
      checkStr = arg1.split('');
      testStr = arg2.split('');
  } else {
      checkStr = arg2.split('');
      testStr = arg1.split('');
  }
  
  let common = [];
  for ( let i = 0; i < testStr.length; i++ ) {
      for ( let j = 0; j < checkStr.length; j++ ) {
          if ( checkStr[j] == testStr[i]) {
              common.push(testStr[i])
              checkStr.splice(j, 1);
              break 
          }
      }
  }

  return common.length;
  // remove line with error and write your code here
}

module.exports = {
  getCommonCharacterCount
};
