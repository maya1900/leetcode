var findMinArrowShots = function (points) {
  points.sort((a, b) => a[1] - b[1])
  let count = 0
  let pos = points[0][1]
  for (let i = 0; i < points.length; i++) {
    if (pos < points[i][0]) {
      pos = points[i][1]
      count++
    }
  }
  return count
}
