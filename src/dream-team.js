const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(/* members */) {
  let arg = arguments[0];
  let name = [];
  let notValid = [];
  
  if ( !Array.isArray(arg) ) {
      return false;
  } else {
      for ( let i = 0; i < arg.length; i++ ) {
          if ( typeof arg[i] === 'string' ) {
              for ( let letter in arg[i] ) {
                  if ( arg[i][letter] != ' ' ) {
                    name.push(arg[i][letter].toUpperCase());
                    break;
                  }
              }
          } else {
              notValid.push(arg[i]);
          }
      }

      if ( notValid.length === arg.length ) {
          return false;
      } else {
          return name.sort().join('');
      }
  }
  // remove line with error and write your code here
}

module.exports = {
  createDreamTeam
};
