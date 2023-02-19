var twoSum = function(numbers, target) {
  let left = 0, right = numbers.length - 1
  if(numbers.length <= 2) return numbers
  while(left < right) {
    let sum = numbers[left] + numbers[right]
    if (sum === target) {
      return [left, right]
    } else if(sum < target) {
      left++
    } else {
      right--
    }
  }
  return []
}
