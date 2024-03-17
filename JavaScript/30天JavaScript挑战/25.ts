type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue }
type ArrayType = { id: number } & Record<string, JSONValue>

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
  const map = new Map()
  for (const obj of arr1) map.set(obj.id, obj)
  for (const obj of arr2) {
    if (!map.has(obj.id)) map.set(obj.id, obj)
    else {
      const prevObj = map.get(obj.id)
      for (const key of Object.keys(obj)) prevObj[key] = obj[key]
    }
  }
  return [...map.values()].sort((a, b) => a.id - b.id)
}
