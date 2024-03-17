declare global {
  interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>
  }
}

Array.prototype.groupBy = function (fn) {
  return this.reduce((acc, cur) => {
    const key = fn(cur)
    acc[key] ||= []
    acc[key].push(cur)
    return acc
  }, {})
}

export {}
