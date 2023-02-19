var maxEnvelopes = function (envelopes) {
  const len = envelopes.length
  if (len <= 1) return len
  envelopes.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1]
    } else {
      return a[0] - b[0]
    }
  })
  const dp = [envelopes[0][1]]
  for (let i = 0; i < len; i++) {
    const num = envelopes[i][1]
    if (num > dp[dp.length - 1]) {
      dp.push(envelopes[i][1])
    } else {
      const index = binarySearch(dp, num)
      dp[index] = num
    }
  }
  return dp.length
}
const binarySearch = (dp, target) => {
  let left = 0, right = dp.length - 1
  while (left < right) {
    const mid = left + ((right - left) >> 1)
    if (dp[mid] === target) {
      return mid
    } else if (dp[mid] > target) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return left
}
let envelopes = [[4, 5], [4, 6], [6, 7], [2, 3], [1, 1]]
console.log(maxEnvelopes(envelopes)) // 3
