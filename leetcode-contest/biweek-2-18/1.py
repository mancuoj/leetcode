class Solution:
    def minMaxDifference(self, num: int) -> int:
        s = str(num)
        max, min = num, num
        for i in s:
            if i != "9":
                max = int(s.replace(i, "9"))
                break
        for i in s:
            if i != "0":
                min = int(s.replace(i, "0"))
                break
        return max - min
