var findLengthOfLCIS = function(nums) {
  if(nums.length < 2) return nums.length;
  nums = nums.sort((a, b) => a - b)
  // 滑动窗口
  let left = 0, right = 1, len = 1
  while(right < nums.length) {
    if(nums[right] - nums[right - 1] > 1) {
      left = right
    }
    len = Math.max(len, right - left + 1)
    right++
  }
  return len
}
