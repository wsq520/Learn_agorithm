// https://leetcode.cn/problems/swap-nodes-in-pairs/

var swapPairs = function(head) {
  let ret = new ListNode(-1, head)
  // 虚拟节点ret是不动的 用temp来改变指针 因为temp和ret指向同一个对象 temp像给ret做了个代理       
  let temp = ret
  while(temp.next && temp.next.next) {
      let pre = temp.next
      let cur = temp.next.next
      pre.next = cur.next
      cur.next = pre
      temp.next = cur
      temp = pre
  }
  return ret.next
};