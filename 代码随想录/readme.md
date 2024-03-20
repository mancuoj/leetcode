# 刷题笔记

## 二分

- https://www.bilibili.com/video/BV1AP41137w7/
- 有序，两种性质，红蓝染色
- 区间不变 `[0, nums.length - 1]`
  - 左闭右闭
    - L -> M + 1，左区间一个性质
    - R -> M - 1，右区间一个性质
    - 循环不变量，L - 1，R + 1，在循环中一直保持自身性质不变
    - 区间在 LR 相等时仍不为空，最终 R + 1 == L
    - 答案落在 L 上
    - 找最大值找不到返回 nums.length，找最小值找不到返回 0
  - 左闭右开 `[0, nums.length)`
    - 区间在 LR 相等时为空，答案落在 LR 上
  - 左开右开 `(-1, nums.length)`
    - 区间在 L+1 == R 时为空，答案落在 R 上
- 其他三种情况都可以用 `>=` 来推导
  - `< target` -> `>= target - 1`
  - `> target` -> `(>= target + 1)`
  - `<= target` -> `(> target) - 1` -> `(>= target + 1) - 1`
