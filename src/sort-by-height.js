const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(/* arr */) {
  let arg = arguments[0];
    let argArr = []
    arg.forEach((item) => {
        if ( item != -1 ) {
            argArr.push(item);
        } 
    })
    argArr.sort((a,b) => b - a);

    for (let i = 0; i < arg.length; i ++ ) {
        if ( arg[i] != -1 ) {
            arg[i] = argArr[argArr.length-1];
            argArr.pop();
        }
    }
    return arg
  // remove line with error and write your code here
}

module.exports = {
  sortByHeight
};
