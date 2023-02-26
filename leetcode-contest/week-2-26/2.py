class Solution:
    def divisibilityArray(self, word: str, m: int) -> List[int]:
        n = len(word)
        num = 0
        rem = 0
        div = [0] * n
        for i in range(n):
            num = num * 10 + int(word[i])
            rem = (rem * 10 + int(word[i])) % m
            if rem == 0:
                div[i] = 1
            else:
                div[i] = 0
            num %= m
            rem %= m
        return div
