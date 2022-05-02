const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(/* str, options */) {
  let newString = '';
  let additions = '';
  let str;
  if ( typeof arguments[0] == 'object' ) {
    if (arguments[0] == null ) {
        str = 'null'; 
    } else if (arguments[0][Symbol.toPrimitive]) {
        str = arguments[0][Symbol.toPrimitive]();
    } else if ( Array.isArray(arguments[0]) ) {
        str = arguments[0].join('');
    } else {
        str = arguments[0].toString();
    } 
  } else if (arguments[0] == 'null' ) {
      str = arguments[0].toString();
  } else {
      str = arguments[0].toString();
  }
  // const str = arguments[0].toString();
  const obj = arguments[1];
  const repeatTimes = obj.repeatTimes ? obj.repeatTimes : 1;
  const separator = obj.separator ? obj.separator : '+' ;
  let addition;
  const additionRepeatTimes = obj.additionRepeatTimes ? obj.additionRepeatTimes : 1;
  const additionSeparator = obj.additionSeparator ? obj.additionSeparator : '|';

  if ( obj.addition === null ) {
      addition = 'null';
  } else if (typeof obj.addition == 'object' ) {
      if (obj.addition[Symbol.toPrimitive]) {
        addition = obj.addition[Symbol.toPrimitive]();
      } else {
        addition = obj.addition.toString();
      }
  } else if (typeof obj.addition == 'boolean') {
      addition = obj.addition.toString();
  } else if ( !obj.addition ) {
      addition = ''
  } else {
      addition = obj.addition.toString();
  }

  for ( let i = 0; i < additionRepeatTimes; i++) {
      additions = `${additions}${addition}`;
      if ( i != additionRepeatTimes - 1 ) {
          additions = `${additions}${additionSeparator}`;
      }
  }

  for ( let i = 0; i < repeatTimes; i++ ) {
      newString = `${newString}${str}${additions}`;
      if ( i != repeatTimes-1 ) {
          newString= `${newString}${separator}`
      }
  }

return newString;

  // remove line with error and write your code here
}

module.exports = {
  repeater
};
