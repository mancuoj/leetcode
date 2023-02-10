# https://leetcode.cn/problems/sqrtx/
class Solution:
    def mySqrt(self, x: int) -> int:
        l, r, ans = 0, x, 0
        while l < r:
            mid = (l + r + 1) // 2
            if mid**2 <= x:
                ans = mid
                l = mid
            else:
                r = mid - 1
        return ans
