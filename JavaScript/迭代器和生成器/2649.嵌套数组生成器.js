/**
 * https://leetcode.cn/problems/nested-array-generator/
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function* (arr) {
  const nums = arr.flat(Infinity)
  for (const num of nums) {
    yield num
  }
}

var inorderTraversal2 = function* (arr) {
  for (const item of arr) {
    if (Array.isArray(item)) {
      yield* inorderTraversal(item)
    } else {
      yield item
    }
  }
}

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */
