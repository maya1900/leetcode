var zigzagLevelOrder = function (root) {
  const res = []
  const dfs = (i, root) => {
    if (!root) return null;
    if (!Array.isArray(res[i])) res[i] = []
    // 按位与运算，i&1为1说明是奇数；i&1为0是偶数
    if (i & 1) {
      res[i].unshift(root.val)
    } else {
      res[i].push(root.val)
    }
    dfs(i + 1, root.left)
    dfs(i + 1, root.right)
  }
  dfs(0, root)
  return res
}
