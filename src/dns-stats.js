const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(/* domains */) {
  let arg = arguments[0];
  let arr = [];
  let counts = {};

  arg.forEach((item) => {
      let parts = item.split('.').reverse();
      let partsArr = [];
      let str = '';
      for ( i = 0; i < parts.length; i++ ) {
          str = `${str}.${parts[i]}`;
          partsArr.push(str);
      }
      arr.push(...partsArr)
  })

  arr.forEach((item) => { counts[item] = (counts[item] || 0) + 1; });

  return counts
  // remove line with error and write your code here
}

module.exports = {
  getDNSStats
};
