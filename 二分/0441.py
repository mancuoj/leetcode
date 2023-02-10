# https://leetcode.cn/problems/arranging-coins/
class Solution:
    def arrangeCoins(self, n: int) -> int:
        l, r = 1, n
        while l < r:
            mid = (l + r + 1) // 2
            if (mid + 1) * mid / 2 <= n:
                l = mid
            else:
                r = mid - 1
        return l
