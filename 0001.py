class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        records = {}
        for idx, val in enumerate(nums):
            if target - val not in records:
                records[val] = idx
            else:
                return [records[target - val], idx]
