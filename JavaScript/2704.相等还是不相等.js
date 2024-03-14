/**
 * https://leetcode.cn/problems/to-be-or-not-to-be/
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  return {
    toBe: (cur) => {
      if (cur !== val) {
        throw new Error('Not Equal')
      }
      return true
    },
    notToBe: (cur) => {
      if (cur === val) {
        throw new Error('Equal')
      }
      return true
    },
  }
}

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
