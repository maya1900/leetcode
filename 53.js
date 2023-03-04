const maxSubArray = function (nums) {
  const len = nums.length, dp = [nums[0]]
  let max = dp[0]
  for (let i = 1; i < len; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
    max = Math.max(max, dp[i])
  }
  return max
}
