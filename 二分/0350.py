# https://leetcode.cn/problems/intersection-of-two-arrays-ii/
class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        return list(
            (collections.Counter(nums1) & collections.Counter(nums2)).elements()
        )
