# https://leetcode.cn/problems/separate-the-digits-in-an-array/
class Solution:
    def separateDigits(self, nums: List[int]) -> List[int]:
        l = []
        for i in nums:
            for j in str(i):
                l.append(int(j))
        return l
