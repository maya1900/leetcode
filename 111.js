var minDepth = function (root) {
  // if (root == null) return 0
  // if (root.left == null) {
  //   return minDepth(root.right) + 1
  // } else if (root.right == null) {
  //   return minDepth(root.left) + 1
  // } else {
  //   return Math.min(minDepth(root.left), minDepth(root.right)) + 1
  // }
  const pre = []
  if (root == null) return 0
  pre.push(root)
  let depth = 0
  while (pre.length != 0) {
    depth++
    for (let i = 0; i < pre.length; i++) {
      const cur = pre.shift()
      if (cur.left) pre.push(cur.elft)
      if (cur.right) pre.push(cur.right)
      if (cur.left == null && cur.right == null) return depth
    }
  }
  return depth
}
