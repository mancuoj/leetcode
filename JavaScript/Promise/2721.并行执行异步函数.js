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

    const res = []
    let cnt = 0
    functions.forEach((fn, idx) => {
      fn()
        .then((result) => {
          res[idx] = result
          if (++cnt === functions.length) resolve(res)
        })
        .catch(reject)
    })
  })
}

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
