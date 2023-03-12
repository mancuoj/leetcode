class Solution:
    def vowelStrings(self, words: List[str], left: int, right: int) -> int:
        cnt = 0
        for i in range(len(words)):
            if left <= i <= right:
                if words[i][0] in "aeiou" and words[i][len(words[i]) - 1] in "aeiou":
                    cnt += 1
        return cnt