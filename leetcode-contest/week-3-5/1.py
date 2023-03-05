class Solution:
    def passThePillow(self, n: int, time: int) -> int:
        cur, direction, pos = 1, 1, 1
        while time > 0:
            if direction == 1 and pos == n:
                direction = -1
                pos -= 1
            elif direction == -1 and pos == 1:
                direction = 1
                pos += 1
            else:
                pos += direction
            cur += 1
            time -= 1
        return pos
