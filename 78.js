var subsets = function (nums) {
  const res = []
  const track = []
  backtrack(nums, 0, track)
  return res
  function backtrack(nums, start, track) {
    res.push([...track])
    for (let i = start; i < nums.length; i++) {
      track.push(nums[i])
      backtrack(nums, i + 1, track)
      track.pop()
    }
  }
};
