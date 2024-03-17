var flat = function (arr, n) {
  if (n === 0) return arr
  return [].concat(
    ...arr.map((item) => (Array.isArray(item) ? flat(item, n - 1) : item)),
  )
}
