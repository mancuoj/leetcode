/**
 * https://leetcode.cn/problems/promise-time-limit/
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
  return async function (...args) {
    const timeLimitPromise = new Promise((resolve, reject) => {
      setTimeout(() => reject('Time Limit Exceeded'), t)
    })
    const returnedPromise = fn(...args)
    return Promise.race([timeLimitPromise, returnedPromise])
  }
}

var timeLimit2 = function (fn, t) {
  return async function (...args) {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => reject('Time Limit Exceeded'), t)
      fn(...args)
        .then(resolve)
        .catch(reject)
        .finally(() => clearTimeout(timeout))
    })
  }
}

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
