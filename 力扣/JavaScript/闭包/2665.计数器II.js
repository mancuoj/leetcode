/**
 * https://leetcode.cn/problems/counter-ii/
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let cur = init
  return {
    increment: () => ++cur,
    decrement: () => --cur,
    reset: () => (cur = init),
  }
}

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
