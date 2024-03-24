/*
 * @lc app=leetcode.cn id=2413 lang=javascript
 *
 * [2413] 最小偶倍数
 *
 * https://leetcode.cn/problems/smallest-even-multiple/description/
 *
 * algorithms
 * Easy (84.50%)
 * Likes:    92
 * Dislikes: 0
 * Total Accepted:    67.4K
 * Total Submissions: 79.9K
 * Testcase Example:  '5'
 *
 * 给你一个正整数 n ，返回 2 和 n 的最小公倍数（正整数）。
 *
 *
 * 示例 1：
 *
 * 输入：n = 5
 * 输出：10
 * 解释：5 和 2 的最小公倍数是 10 。
 *
 *
 * 示例 2：
 *
 * 输入：n = 6
 * 输出：6
 * 解释：6 和 2 的最小公倍数是 6 。注意数字会是它自身的倍数。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= n <= 150
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function (n) {
  return ((n % 2) + 1) * n
}
// @lc code=end
