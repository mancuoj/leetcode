type Fn = (...params: number[]) => number

function memoize(fn: Fn): Fn {
  const map = new Map()
  return function (...args) {
    const key = args.join()
    if (!map.has(key)) map.set(key, fn(...args))
    return map.get(key)
  }
}
