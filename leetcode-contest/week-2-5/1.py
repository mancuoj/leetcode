# https://leetcode.cn/problems/take-gifts-from-the-richest-pile/
class Solution:
    def pickGifts(self, gifts: List[int], k: int) -> int:
        for _ in range(k):
            gifts = sorted(gifts)
            gifts[-1] = int(gifts[-1] ** 0.5)
        return sum(gifts)
