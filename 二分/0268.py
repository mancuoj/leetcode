# https://leetcode.cn/problems/missing-number/
class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        # x ^ 0 = x, x ^ x = 0
        xor = 0
        for i, num in enumerate(nums):
            xor ^= i ^ num
        return xor ^ len(nums)
