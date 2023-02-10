# https://leetcode.cn/problems/find-smallest-letter-greater-than-target/
class Solution:
    def nextGreatestLetter(self, letters: List[str], target: str) -> str:
        if target < letters[-1]:
            return letters[bisect_right(letters, target)]
        return letters[0]
