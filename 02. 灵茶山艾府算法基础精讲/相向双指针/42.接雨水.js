/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 *
 * https://leetcode.cn/problems/trapping-rain-water/description/
 *
 * algorithms
 * Hard (63.28%)
 * Likes:    5081
 * Dislikes: 0
 * Total Accepted:    909.2K
 * Total Submissions: 1.4M
 * Testcase Example:  '[0,1,0,2,1,0,1,3,2,1,2,1]'
 *
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 * 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出：6
 * 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。
 *
 *
 * 示例 2：
 *
 *
 * 输入：height = [4,2,0,3,2,5]
 * 输出：9
 *
 *
 *
 *
 * 提示：
 *
 *
 * n == height.length
 * 1 <= n <= 2 * 10^4
 * 0 <= height[i] <= 10^5
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let left = 0
  let right = height.length - 1
  let preMax = 0
  let sufMax = 0
  let ans = 0

  while (left < right) {
    preMax = Math.max(height[left], preMax)
    sufMax = Math.max(height[right], sufMax)
    if (preMax < sufMax) {
      ans += preMax - height[left++]
    } else {
      ans += sufMax - height[right--]
    }
  }

  return ans
}
// @lc code=end

var trap2 = function (height) {
  let n = height.length
  let preMax = []
  let sufMax = []
  let ans = 0

  preMax[0] = height[0]
  for (let i = 1; i < n; i++) {
    preMax[i] = Math.max(preMax[i - 1], height[i])
  }

  sufMax[n - 1] = height[n - 1]
  for (let i = n - 2; i >= 0; i--) {
    sufMax[i] = Math.max(height[i], sufMax[i + 1])
  }

  for (let i = 0; i < n; i++) {
    ans += Math.min(preMax[i], sufMax[i]) - height[i]
  }

  return ans
}
