type Fn = (...params: any[]) => Promise<any>

function timeLimit(fn: Fn, t: number): Fn {
  return async function (...args) {
    const resPromise = fn(...args)
    const timeLimitPromise = new Promise((resolve, reject) => {
      setTimeout(() => reject('Time Limit Exceeded'), t)
    })
    return Promise.race([resPromise, timeLimitPromise])
  }
}
