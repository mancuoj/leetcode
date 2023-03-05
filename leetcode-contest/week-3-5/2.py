# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def kthLargestLevelSum(self, root: Optional[TreeNode], k: int) -> int:
        queue = [root]
        level = 0
        level_dict = dict()
        while queue:
            level += 1
            level_sum = 0
            level_size = len(queue) 
            for _ in range(level_size):
                node = queue.pop(0)
                level_sum += node.val
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            level_dict[level] = level_sum  
        res = sorted(level_dict.items(), key=lambda x: x[1], reverse=True)
        if k > len(res):
            return -1
        else:
            return res[k-1][1]
