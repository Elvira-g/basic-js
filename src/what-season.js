const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(/* date */) {
  let arg = arguments[0];
  let newDate;
  if (arg === undefined) {
      return 'Unable to determine the time of year!'
  } else {
      newDate = new Date(arg);
      if (arg[Symbol.toStringTag] == 'Date') {
        throw new Error ('Invalid date!');
      }
      if (Object.prototype.toString.call(arg) != '[object Date]') {
          throw new Error ('Invalid date!');
      }
      if (isNaN(newDate.getTime())) {
          throw new Error ('Invalid date!'); 
      }
      console.log(newDate)
      if ( newDate.getMonth() === 0 || newDate.getMonth() === 1 || newDate.getMonth() === 11 ) {
        return 'winter'
      } 
      if ( newDate.getMonth() === 2 || newDate.getMonth() === 3 || newDate.getMonth() === 4 ) {
        return 'spring'
      } 
      if ( newDate.getMonth() === 5 || newDate.getMonth() === 6 || newDate.getMonth() === 7 ) {
        return 'summer'
      }
      if ( newDate.getMonth() === 8 || newDate.getMonth() === 9 || newDate.getMonth() === 10 ) {
        return 'fall'
      }
  }
  // remove line with error and write your code here
}

module.exports = {
  getSeason
};
