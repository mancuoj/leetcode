/**
 * https://leetcode.cn/problems/array-reduce-transformation/
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  for (const num of nums) {
    init = fn(init, num)
  }
  return init
}
