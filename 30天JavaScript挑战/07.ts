type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
  let res = init
  for (let i = 0; i < nums.length; i++) res = fn(res, nums[i])
  return res
}
