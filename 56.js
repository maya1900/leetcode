var merge = function (intervals) {
  const res = []
  intervals.sort((a, b) => a[0] - b[0])
  let prev = intervals[0]
  for (let i = 1; i < intervals.length; i++) {
    const cur = intervals[i]
    if (prev[1] >= cur[0]) {
      prev[1] = Math.max(cur[1], prev[1])
    } else {
      res.push(prev)
      prev = cur
    }
  }
  res.push(prev)
  return res
}
