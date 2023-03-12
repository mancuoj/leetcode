class Solution:
    def maxScore(self, nums: List[int]) -> int:
        pos = []
        neg = []
        for num in nums:
            if num > 0:
                pos.append(num)
            else:
                neg.append(num)
        neg.sort(reverse=True)
        s, cnt = 0, 0
        for num in chain(pos, neg):
            s += num
            if s > 0:
                cnt += 1
        return cnt