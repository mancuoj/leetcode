// 二分前提：有序
// 查找失败情况 left 总是指向 right 后一位
const search = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  // 区间不变 [left, right]
  while (left <= right) {
    mid = (left + right) >> 1
    if (nums[mid] > target) right = mid - 1 // 落在左区间里 [left, mid-1]
    else if (nums[mid] < target) left = mid + 1 // 右区间 [mid+1, right]
    else return mid
    console.log('left:', left, 'right:', right, 'mid', mid)
  }
  return -1
}

const search2 = function (nums, target) {
  let left = 0
  let right = nums.length
  // 区间不变 [left, right)
  while (left < right) {
    let mid = (left + right) >> 1
    if (nums[mid] > target) right = mid // [left, mid)
    else if (nums[mid] < target) left = mid + 1 // [mid+1, right)
    else return mid
  }
  return -1
}

const nums = [1, 3, 4, 5, 8, 12]
const target = 7
console.log('返回值：', search(nums, target))
