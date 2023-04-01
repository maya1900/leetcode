var maxDepth = function (root) {
  if (root == null) {
    return 0
  }
  let left = maxDepth(root.left)
  let right = maxDepth(root.right)
  return 1 + Math.max(left, right)
}

var maxDepth = function (root) {
  let depth = 0
  let res = 0
  traverse(root)
  return res

  function traverse(root) {
    if (root == null) {
      return
    }
    depth++
    res = Math.max(res, depth)
    traverse(root.left)
    traverse(root.right)
    depth--
  }
}
