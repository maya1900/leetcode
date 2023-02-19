var deleteNode = function(root, key) {
  // root空，返回空
  if(!root) return null;
  // root值大于key，说明key的节点在左子树中
  if(root.val > key) {
    root.left = deleteNode(root.left, key)
    return root
  }
  // root值小于key，说明key的节点在右子树中
  if(root.val < key) {
    root.right = deleteNode(root.right, key)
    return root
  }
  // root值等于key，root是要删除的节点
  if(root.val === key) {
    // root左右都没有子节点，直接删除
    if(!root.left && !root.right) return null;
    // root只有左节点，返回左节点
    if(!root.right) return root.left
    // root只有右节点，返回右节点
    if(!root.left) return root.right
    // 左右都有子树，得到右子树，不断遍历右子树的左子节点，找到最小一个，返回
    let successor = root.right
    while(successor.left) successor = successor.left;
    root.right = deleteNode(root.right, successor.val)
    successor.right = root.right
    successor.left = root.left
    return successor
  }
  return root
}
