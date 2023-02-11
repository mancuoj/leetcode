class Solution:
    def fillCups(self, amount: List[int]) -> int:
        amount.sort()
        if amount[2] > amount[0] + amount[1]:
            return amount[2]
        return (sum(amount) + 1) // 2
