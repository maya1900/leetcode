var threeSum = function(nums) {
  let res = []
  nums.sort((a, b) => a - b)
  for(let i = 0; i < nums.length; i++) {
    let left = i + 1, right = nums.length - 1
    if(nums[i] > 0) {
      return res
    }
    if(i > 0 && nums[i - 1] === nums[i]) {
      continue
    }
    while(left < right) {
      const sum = nums[i] + nums[left] + nums[right]
      if(sum < 0) {
        left++
      } else if(sum > 0) {
        right--
      } else {
        res.push([nums[i], nums[left], nums[right]])
        while(left < right && nums[left] == nums[left + 1]) {
          left++
        }
        while(left < right && nums[right - 1] == nums[right]) {
          right--
        }
        left++
        right--
      }
    }
  }
  return res
}
