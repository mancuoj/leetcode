type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue }
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined

function once(fn: Function): OnceFn {
  let isCalled = false
  return function (...args) {
    if (!isCalled) {
      isCalled = true
      return fn(...args)
    }
  }
}
