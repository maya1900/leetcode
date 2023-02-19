var removeDuplicates = function(nums) {
  let left = right = 0
  while(++right < nums.length) {
    if(nums[left] !== nums[right]) {
      nums[++left] = nums[right]
    }
  }
  return left + 1
}
