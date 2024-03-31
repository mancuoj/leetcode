/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let ans = 0,
    l = 0,
    r = height.length - 1
  while (l < r) {
    let area = Math.min(height[l], height[r]) * (r - l)
    ans = Math.max(ans, area)
    if (height[l] < height[r]) l++
    else r--
  }
  return ans
}
// @lc code=end
