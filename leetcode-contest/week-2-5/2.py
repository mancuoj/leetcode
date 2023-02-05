# https://leetcode.cn/problems/count-vowel-strings-in-ranges/
class Solution:
    def vowelStrings(self, words: List[str], queries: List[List[int]]) -> List[int]:
        pre = [0] * len(words)
        for i in range(len(words)):
            if words[i][0] in "aeiou" and words[i][-1] in "aeiou":
                pre[i] = 1

        for i in range(1, len(pre)):
            pre[i] += pre[i - 1]

        res = []
        for q in queries:
            l, r = q
            if l == 0:
                res.append(pre[r])
            else:
                res.append(pre[r] - pre[l - 1])
        return res
