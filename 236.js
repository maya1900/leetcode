var lowestCommonAncestor = function (root, p, q) {
  const traverse = (root, p, q) => {
    // 如果空或者root等于p或q，说明找到，返回root
    if (!root || root == p || root == q) return root;
    let left = traverse(root.left, p, q);
    let right = traverse(root.right, p, q);
    // 如果left和right都不为空，则说明root是最近公共节点
    if (left != null && right != null) {
      return root;
    }
    // 如果left空right不为空，则返回right，反之一样
    //  如果left和right都是空，返回任一即可
    if (left == null) return right;
    return left;
  };
  return traverse(root, p, q);
};
