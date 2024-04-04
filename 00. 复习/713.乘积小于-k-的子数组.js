/*
 * @lc app=leetcode.cn id=713 lang=javascript
 *
 * [713] 乘积小于 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  if (k <= 1) return 0

  let l = 0,
    ans = 0,
    prod = 1
  for (let r = 0; r < nums.length; r++) {
    prod *= nums[r]
    while (prod >= k) {
      prod /= nums[l++]
    }
    ans += r - l + 1
  }
  return ans
}
// @lc code=end
