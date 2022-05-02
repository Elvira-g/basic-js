const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(/* names */) {
  let arg = arguments[0];
  let obj = {};
  let name = '';
  let count = 0;
  let result = [];

  for ( let i = 0; i < arg.length; i++ ) {
    if ( arg[i] in obj ) {
        count = obj[arg[i]] + 1;
        obj[arg[i]] = count;
        name = `${arg[i]}(${count})`;
        count = 0;
    } else {
        if ( result.includes(arg[i]) ) {
            name = `${arg[i]}(${count+1})`;
        } else {
            obj[arg[i]] = count;
            name = arg[i]; 
        }
    }
    result.push(name);
  }

  return result;
  // remove line with error and write your code here
}

module.exports = {
  renameFiles
};
