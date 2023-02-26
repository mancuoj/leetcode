class Solution:
    def leftRigthDifference(self, nums: List[int]) -> List[int]:
        ans = []
        for i in range(len(nums)):
            ans.append(abs(sum(nums[:i]) - sum(nums[i+1:])))
        return ans