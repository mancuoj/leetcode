/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 *
 * https://leetcode.cn/problems/find-peak-element/description/
 *
 * algorithms
 * Medium (49.49%)
 * Likes:    1262
 * Dislikes: 0
 * Total Accepted:    379K
 * Total Submissions: 765.8K
 * Testcase Example:  '[1,2,3,1]'
 *
 * 峰值元素是指其值严格大于左右相邻值的元素。
 *
 * 给你一个整数数组 nums，找到峰值元素并返回其索引。数组可能包含多个峰值，在这种情况下，返回 任何一个峰值 所在位置即可。
 *
 * 你可以假设 nums[-1] = nums[n] = -∞ 。
 *
 * 你必须实现时间复杂度为 O(log n) 的算法来解决此问题。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,2,3,1]
 * 输出：2
 * 解释：3 是峰值元素，你的函数应该返回其索引 2。
 *
 * 示例 2：
 *
 *
 * 输入：nums = [1,2,1,3,5,6,4]
 * 输出：1 或 5
 * 解释：你的函数可以返回索引 1，其峰值元素为 2；
 * 或者返回索引 5， 其峰值元素为 6。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 1000
 * -2^31 <= nums[i] <= 2^31 - 1
 * 对于所有有效的 i 都有 nums[i] != nums[i + 1]
 *
 *
 */

// @lc code=start
/**
 * 返回 任何一个峰值 所在位置即可
 * 峰顶左侧红色，峰顶右侧包括峰顶蓝色
 * 最右边没有右边的数，所以绝对不是峰顶
 * 0, nums.length - 2
 * 对于所有有效的 i 都有 nums[i] != nums[i + 1]
 * 左右比较，右边大，右边一定有峰顶，左边大，左边一定有峰顶
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let left = 0
  let right = nums.length - 2
  while (left <= right) {
    let mid = left + ((right - left) >> 1)
    if (nums[mid] < nums[mid + 1]) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return left
}
// @lc code=end
