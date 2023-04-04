var pathSum = function (root, target) {
  const res = []
  dfs(root, target, res, [])
  return res

  function dfs(root, target, res, list) {
    if (root == null) return
    list.push(root.val)
    if (root.val == target && root.left == null && root.right == null) res.push(list.slice())
    dfs(root.left, target - root.val, res, list)
    dfs(root.right, target - root.val, res, list)
    list.pop()
  }
}
