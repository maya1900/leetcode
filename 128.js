var longestConsecutive = (nums) => {
  const set = new Set(nums)
  let max = 0
  for(let i = 0; i < nums.length; i++) {
    if(!set.has(nums[i] - 1)) {
      let cur = nums[i]
      let count = 1
      while(set.has(cur + 1)) {
        cur++
        count++
      }
      max = Math.max(max, count)
    }
  }
  return max
}
