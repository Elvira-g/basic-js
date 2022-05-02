const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(/* n */) {
  let arg = arguments[0];
    const reg = /[A-F|0-9|-]/i;
    let result = [];
    let string = arg;

    if (arg.length != 17) {
        return false
    }

    for ( let key in string ) {
        if (reg.test(string[key]) ) {
            result.push(true);
        } else {
            result.push(false);
        }
    }

    if ( result.includes(false) ) {
        return false
    } else {
        return true
    }
  // remove line with error and write your code here
}
module.exports = {
  isMAC48Address
};
