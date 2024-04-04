/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let s = 0,
    l = 0,
    ans = nums.length + 1
  for (let r = 0; r < nums.length; r++) {
    s += nums[r]
    while (s >= target) {
      ans = Math.min(ans, r - l + 1)
      s -= nums[l++]
    }
  }
  return ans === nums.length + 1 ? 0 : ans
}
// @lc code=end
