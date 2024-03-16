/**
 * https://leetcode.cn/problems/group-by/
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
  return this.reduce((acc, cur) => {
    const key = fn(cur)
    acc[key] ||= []
    acc[key].push(cur)
    return acc
  }, {})
}

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
