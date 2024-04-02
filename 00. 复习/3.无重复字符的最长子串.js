/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let l = 0,
    ans = 0,
    set = new Set()
  for (let r = 0; r < s.length; r++) {
    while (set.has(s[r])) set.delete(s[l++])
    set.add(s[r])
    ans = Math.max(ans, r - l + 1)
  }
  return ans
}
// @lc code=end
