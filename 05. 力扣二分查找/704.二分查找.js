/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 *
 * https://leetcode.cn/problems/binary-search/description/
 *
 * algorithms
 * Easy (55.15%)
 * Likes:    1548
 * Dislikes: 0
 * Total Accepted:    1.2M
 * Total Submissions: 2.2M
 * Testcase Example:  '[-1,0,3,5,9,12]\n9'
 *
 * 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的
 * target，如果目标值存在返回下标，否则返回 -1。
 *
 *
 * 示例 1:
 *
 * 输入: nums = [-1,0,3,5,9,12], target = 9
 * 输出: 4
 * 解释: 9 出现在 nums 中并且下标为 4
 *
 *
 * 示例 2:
 *
 * 输入: nums = [-1,0,3,5,9,12], target = 2
 * 输出: -1
 * 解释: 2 不存在 nums 中因此返回 -1
 *
 *
 *
 *
 * 提示：
 *
 *
 * 你可以假设 nums 中的所有元素是不重复的。
 * n 将在 [1, 10000]之间。
 * nums 的每个元素都将在 [-9999, 9999]之间。
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    mid = (left + right) >> 1
    if (nums[mid] > target) right = mid - 1
    else if (nums[mid] < target) left = mid + 1
    else return mid
  }
  return -1
}
// @lc code=end

const search2 = function (nums, target) {
  let left = 0
  let right = nums.length
  while (left < right) {
    let mid = (left + right) >> 1
    if (nums[mid] > target) right = mid
    else if (nums[mid] < target) left = mid + 1
    else return mid
  }
  return -1
}

const search3 = function (nums, target) {
  let left = -1
  let right = nums.length
  while (left + 1 < right) {
    let mid = (left + right) >> 1
    if (nums[mid] > target) right = mid
    else if (nums[mid] < target) left = mid
    else return mid
  }
  return -1
}
