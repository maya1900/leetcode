var mergeKLists = function(lists) {
  if(lists.length == 0) return null
  return mergeArr(lists)
}
function mergeArr(lists) {
  if(lists.length <= 1) return lists[0]
  let index = Math.floor(lists.length / 2)
  const left = mergeArr(lists.slice(0, index))
  const right = mergeArr(lists.slice(index))
  return mergeArr(left, right)
}
function merge(l, r) {
  if(l == null && r == null) return null
  if(l == null && r != null) return r
  if(l != null && r == null) return l
  let newHead = null, head = null
  while(l != null && r != null) {
    if(l.val < r.val) {
      if(!head) {
        newHead = l
        head = l
      } else {
        newHead.next = l
        newHead = newHead.next
      }
      l = l.next
    } else {
      if(!head) {
        newHead = r
        head = r
      } else {
        newHead.next = r
        newHead = newHead.next
      }
      r = r.next
    }
  }
  newHead.next = l ? l : r
  return head
}
