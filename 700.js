var searchBST = function (root, val) {
  if (!root) return null;
  if (val === root.val) return root;
  return searchBST(val < root.val ? root.left : root.right, val);
  while (root) {
    if (val === root.val) return root;
    root = val < root.val ? root.left : root.right;
  }
  return null;
};
