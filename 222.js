var countNodes = function(root) {
  let sum = 0
  const dfs = function(node) {
    let num = 0
    if(node == null) return num
    const left = dfs(node.left)
    const right = dfs(node.right)
    num = left + right + 1
    return num
  }
  sum = dfs(root)
  return sum
}
