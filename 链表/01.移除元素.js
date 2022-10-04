// https://leetcode.cn/problems/remove-linked-list-elements/submissions/

var removeElements = function(head, val) {
  const ret = new ListNode(-1, head)
  // ret不动 用cur来从虚拟节点开始遍历链表
  let cur = ret
  while(cur.next) {
      if(cur.next.val === val) {
          cur.next = cur.next.next
          continue
      }
      cur = cur.next
  }
  return ret.next
};