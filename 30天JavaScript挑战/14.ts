type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue }
type Fn = (...args: JSONValue[]) => void

function cancellable(fn: Fn, args: JSONValue[], t: number): Function {
  let isCancelled = false
  setTimeout(() => {
    if (!isCancelled) fn(...args)
  }, t)
  return () => (isCancelled = true)
}
