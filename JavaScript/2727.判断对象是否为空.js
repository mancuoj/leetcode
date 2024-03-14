/**
 * https://leetcode.cn/problems/is-object-empty/
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  for (const key in obj) return false
  return true
}
