# https://leetcode.cn/problems/disconnect-path-in-a-binary-matrix-by-at-most-one-flip/
# https://leetcode.cn/circle/discuss/F06Kf0/
class Solution:
    def isPossibleToCutPath(self, g: List[List[int]]) -> bool:
        m, n = len(g), len(g[0])
        # 特判一些可以直接得到答案的情况
        if m * n <= 2:
            return False
        if (
            m == 1
            or n == 1
            or g[1][0] == 0
            or g[0][1] == 0
            or g[-2][-1] == 0
            or g[-1][-2] == 0
        ):
            return True

        # 下轮廓
        x, y = 1, 0
        while x != m - 1 or y != n - 1:
            g[x][y] = 0  # 直接修改
            if x < m - 1 and g[x + 1][y]:
                x += 1
            elif y < n - 1 and g[x][y + 1]:
                y += 1
            else:
                return True  # 无法到达终点

        # 上轮廓
        x, y = 0, 1
        while x != m - 1 or y != n - 1:
            if y < n - 1 and g[x][y + 1]:
                y += 1
            elif x < m - 1 and g[x + 1][y]:
                x += 1
            else:
                return True  # 无法到达终点
        return False
