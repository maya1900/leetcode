var maxAreaOfIsland = function (grid) {
  let result = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        const count = dfs(i, j)
        result = Math.max(count, result)
      }
    }
  }
  function dfs(i, j) {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 0) return 0
    grid[i][j] = 0
    let count = 1
    count += dfs(i + 1, j)
    count += dfs(i - 1, j)
    count += dfs(i, j + 1)
    count += dfs(i, j - 1)
    return count
  }
  return result
}
