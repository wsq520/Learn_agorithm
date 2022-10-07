// https://leetcode.cn/problems/remove-nth-node-from-end-of-list/

var removeNthFromEnd = function(head, n) {
  let ret = new ListNode(0, head)
  let slow = ret
  let fast = ret 
  while(n--) {
      fast = fast.next
  }
  while(fast.next) {
      fast = fast.next
      slow = slow.next
  }
  slow.next = slow.next.next
  return ret.next
};