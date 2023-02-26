class Solution:
    def mergeArrays(self, nums1: List[List[int]], nums2: List[List[int]]) -> List[List[int]]:
        hashmap = defaultdict(int)
        for id, val in nums1 + nums2:
            hashmap[id] += val
        
        res = []
        for id in sorted(hashmap.keys()):
            res.append([id, hashmap[id]])
        return res
