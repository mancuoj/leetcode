/**
 * https://leetcode.cn/problems/compact-object/
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  if (Array.isArray(obj)) {
    return obj.map(compactObject).filter(Boolean)
  }

  return Object.entries(obj).reduce((acc, [key, value]) => {
    value = compactObject(value)
    if (value) acc[key] = value
    return acc
  }, {})
}
