var maxArea = function(height) {
  let left = 0, right = height.length - 1, res = 0
  while(left < right) {
    const curArea = (right - left) * Math.min(height[left], height[right])
    res = Math.max(res, curArea)
    if(height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }
  return res
}
