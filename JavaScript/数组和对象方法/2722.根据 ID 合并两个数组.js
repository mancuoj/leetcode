/**
 * https://leetcode.cn/problems/join-two-arrays-by-id/
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  const res = []
  for (const obj of arr1) res[obj.id] = Object.assign(res[obj.id] ?? {}, obj)
  for (const obj of arr2) res[obj.id] = Object.assign(res[obj.id] ?? {}, obj)
  return Object.values(res).sort((a, b) => a.id - b.id)
}

var join2 = function (arr1, arr2) {
  const map = new Map()

  for (const obj of arr1) {
    map.set(obj.id, obj)
  }

  for (const obj of arr2) {
    if (!map.has(obj.id)) {
      map.set(obj.id, obj)
    } else {
      const prevObj = map.get(obj.id)
      for (const key of Object.keys(obj)) {
        prevObj[key] = obj[key]
      }
    }
  }

  return [...map.values()].sort((a, b) => a.id - b.id)
}
