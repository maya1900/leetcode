var canJump = function(nums) {
  let max = 0, end = 0, steps = 0
  for(let i = 0; i < nums.length - 1; i++) {
    max = Math.max(nums[i] + i, max)
    if(i === end) {
      end = max
      steps++
    }
  }
  return steps
}
