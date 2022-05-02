const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(/* disksNumber, turnsSpeed */) {
  let disksNumber = arguments[0]-2;
  let speed = arguments[1]/3600;
  let result = {};
  let steps = (1 * 2) + 1;
    
  for (let i = 1; i <= disksNumber; i++ ) {
    steps = steps * 2 + 1;
  }
  let seconds = Math.floor(steps * 1/speed);

  result.turns = steps;
  result.seconds = seconds;
  return result;
  // remove line with error and write your code here
}

module.exports = {
  calculateHanoi
};
