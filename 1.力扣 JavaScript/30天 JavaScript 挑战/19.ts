type Fn<T> = () => Promise<T>

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
  return new Promise((resolve, reject) => {
    if (functions.length === 0) {
      resolve([])
      return
    }

    const res: T[] = []
    let cnt = 0
    functions.forEach((fn, idx) => {
      fn()
        .then((result) => {
          res[idx] = result
          if (++cnt === functions.length) resolve(res)
        })
        .catch((err) => reject(err))
    })
  })
}
