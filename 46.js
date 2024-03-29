var permute = function (nums) {
  const res = [], path = []
  backtracking(nums, nums.length, [])
  return res
  function backtracking(n, k, used) {
    if (path.length === k) {
      res.push(Array.from(path))
      return
    }
    for (let i = 0; i < k; i++) {
      if (used[i]) continue
      path.push(n[i])
      used[i] = true
      backtracking(n, k, used)
      path.pop()
      used[i] = false
    }
  }
}
console.log(permute([1, 2, 3]))
