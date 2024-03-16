/**
 * https://leetcode.cn/problems/execute-asynchronous-functions-in-parallel/
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
  return new Promise((resolve, reject) => {
    if (functions.length === 0) {
      resolve([])
      return
    }

    const res = new Array(functions.length)
    let resolveCnt = 0
    functions.forEach((fn, idx) => {
      Promise.resolve(fn())
        .then((result) => {
          res[idx] = result
          if (++resolveCnt === functions.length) {
            resolve(res)
          }
        })
        .catch(reject)
    })
  })
}

var promiseAll2 = function (functions) {
  return new Promise((resolve, reject) => {
    if (functions.length === 0) {
      resolve([])
      return
    }

    const res = new Array(functions.length).fill(null)
    let resolveCnt = 0
    functions.forEach(async (fn, idx) => {
      try {
        const fnRes = await fn()
        res[idx] = fnRes
        if (++resolveCnt === functions.length) {
          resolve(res)
        }
      } catch (err) {
        reject(err)
      }
    })
  })
}

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
