class ArrayWrapper {
  nums: number[]

  constructor(nums: number[]) {
    this.nums = nums
  }

  valueOf(): number {
    return this.nums.reduce((acc, cur) => acc + cur, 0)
  }

  toString(): string {
    return `[${this.nums}]`
  }
}
