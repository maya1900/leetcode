var lengthOfLIS = (nums) => {
  let dp = Array(nums.length).fill(1);
  let res = 1;
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
    res = Math.max(res, dp[i])
  }
  return res
}

/**
 * 
 * 动态规划5步法。

1 dp[i]的定义：dp[i]表示i之前最长上升子序列的长度

2 状态转移方程：位置i的最长升序子序列等于j从0到i-1各个位置的最长升序子序列 + 1 的最大值`if (nums[i] > nums[j]) dp[i] = max(dp[i], dp[j] + 1)`

3 dp[i]的初始化：每一个i，对应的dp[i]（即最长上升子序列）起始大小至少都是是1

4 确定遍历顺序：遍历i一定是从前向后遍历。j其实就是0到i-1，遍历i的循环里外层，遍历j则在内层

5 举例推导dp数组
 */
