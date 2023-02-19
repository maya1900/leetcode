var isPalindrome = function(head) {
  let right = reverse(findCenter(head))
  let left = head
  while(right != null) {
    if(left.val !== right.val) {
      return false
    }
    left = left.next
    right = right.next
  }
  return true
}
function findCenter(head) {
  let slow = head, fast = head
  while(fast && fast.next != null) {
    slow = slow.next
    fast = fast.next.next
  }
  // 如果fast不等于null，说明是奇数
  if(fast != null) {
    slow = slow.next
  }
  return slow
}
function reverse(head) {
  let prev = null, cur = head, next = head
  while(cur != null) {
    next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }
  return prev
}
