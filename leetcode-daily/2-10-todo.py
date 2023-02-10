# https://leetcode.cn/problems/dice-roll-simulation/comments/
class Solution:
    def dieSimulator(self, n: int, rollMax: List[int]) -> int:
        mod, rollMax = int(1e9 + 7), [0] + rollMax

        @cache
        def dfs(i, last, cnt):
            if i == n:
                return 1
            res = 0
            for k in range(1, 7):
                if k == last:
                    if cnt + 1 < rollMax[k]:
                        res = (res + dfs(i + 1, k, cnt + 1)) % mod
                else:
                    res = (res + dfs(i + 1, k, 0)) % mod
            return res

        return dfs(0, -1, 0)
