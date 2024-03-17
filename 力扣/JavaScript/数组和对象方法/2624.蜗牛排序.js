/**
 * https://leetcode.cn/problems/snail-traversal/
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function (rowsCount, colsCount) {
  if (this.length !== rowsCount * colsCount) {
    return []
  }

  const res = Array.from({ length: rowsCount }, () => [])

  for (let i = 0; i < this.length; i++) {
    const col = Math.floor(i / rowsCount)
    const rest = i % rowsCount
    const row = col % 2 === 0 ? rest : rowsCount - 1 - rest
    res[row][col] = this[i]
  }

  return res
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */
