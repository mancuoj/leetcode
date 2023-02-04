# https://leetcode.cn/problems/maximum-number-of-integers-to-choose-from-a-range-i/
class Solution:
    def maxCount(self, banned: List[int], n: int, maxSum: int) -> int:
        cnt, banned = 0, set(banned)
        for i in range(1, n + 1):
            if i > maxSum:
                break
            if i not in banned:
                cnt += 1
                maxSum -= i
        return cnt
