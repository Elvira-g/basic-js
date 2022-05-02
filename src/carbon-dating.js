const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(/* sampleActivity */) {
  const sampleActivity = Number(arguments[0]);
  const MODERN_ACTIVITY = 15;
  const HALF_LIFE_PERIOD = 5730;
  let age;

  if ( isNaN(sampleActivity) || arguments.length == 0 || arguments[0] > 15 || arguments[0] <= 0 || (typeof arguments[0] != 'string')) {
    return false
  } else {
    age = HALF_LIFE_PERIOD * Math.log(sampleActivity/MODERN_ACTIVITY) / Math.log(0.5);
    return Math.ceil(age)
  }

  
  // remove line with error and write your code here
}

module.exports = {
  dateSample
};
