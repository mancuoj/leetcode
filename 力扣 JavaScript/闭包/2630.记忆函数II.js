/**
 * https://leetcode.cn/problems/memoize-ii/
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const argsMap = new Map()
  const cache = new Map()
  let id = 0

  return function (...args) {
    const key = args
      .map((arg) => {
        if (!argsMap.has(arg)) argsMap.set(arg, id++)
        return argsMap.get(arg)
      })
      .join('-')
    if (cache.has(key)) {
      return cache.get(key)
    } else {
      const result = fn(...args)
      cache.set(key, result)
      return result
    }
  }
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
