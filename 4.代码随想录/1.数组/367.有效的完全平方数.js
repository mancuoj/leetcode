/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 *
 * https://leetcode.cn/problems/valid-perfect-square/description/
 *
 * algorithms
 * Easy (44.89%)
 * Likes:    566
 * Dislikes: 0
 * Total Accepted:    265.2K
 * Total Submissions: 590.6K
 * Testcase Example:  '16'
 *
 * 给你一个正整数 num 。如果 num 是一个完全平方数，则返回 true ，否则返回 false 。
 *
 * 完全平方数 是一个可以写成某个整数的平方的整数。换句话说，它可以写成某个整数和自身的乘积。
 *
 * 不能使用任何内置的库函数，如  sqrt 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：num = 16
 * 输出：true
 * 解释：返回 true ，因为 4 * 4 = 16 且 4 是一个整数。
 *
 *
 * 示例 2：
 *
 *
 * 输入：num = 14
 * 输出：false
 * 解释：返回 false ，因为 3.742 * 3.742 = 14 但 3.742 不是一个整数。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= num <= 2^31 - 1
 *
 *
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  // 正好相等的
  let left = 1
  let right = num
  while (left <= right) {
    let mid = left + ((right - left) >> 1)
    if (mid ** 2 < num) {
      left = mid + 1
    } else if (mid ** 2 > num) {
      right = mid - 1
    } else {
      return true
    }
  }
  return false
}
// @lc code=end
