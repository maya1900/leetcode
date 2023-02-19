var sortList = function (head) {
  return toSortList(head, null)
}
function toSortList(head, tail) {
  if (head == null) {
    return head
  }
  if (head.next == tail) {
    head.next = null
    return head
  }
  let slow = head, fast = head
  while (fast != tail) {
    slow = slow.next
    fast = fast.next
    if (fast != tail) {
      fast = fast.next
    }
  }
  const mid = slow
  return merge(toSortList(head, mid), toSortList(mid, tail))
}
function merge(h1, h2) {
  const dummy = new ListNode()
  let head = dummy
  while (h1 != null & h2 != null) {
    if (h1.val <= h2.val) {
      head.next = h1
      h1 = h1.next
    } else {
      head.next = h2
      h2 = h2.next
    }
    head = head.next
  }
  if (h1 != null) {
    head.next = h1
  }
  if (h2 != null) {
    head.next = h2
  }
  return dummy.next
}
