// https://leetcode.cn/problems/add-two-numbers/description/

var addTwoNumbers = function (l1, l2) {
  let p1 = l1, p2 = l2
  const l3 = new ListNode(0)
  let p3 = l3
  let carry = 0
  while (p1 || p2) {
    const v1 = p1 ? p1.val : 0
    const v2 = p2 ? p2.val : 0
    const val = v1 + v2 + carry
    // 如果两个数相加大于10 那么就把十位上的1留给下一次循环里与v1 v2相加
    carry = Math.floor(val / 10)
    p3.next = new ListNode(val % 10)
    if (p1) p1 = p1.next
    if (p2) p2 = p2.next
    p3 = p3.next
  }
  // 有可能carry是 1 而因为链表遍历完了没连接上
  if (carry > 0) p3.next = new ListNode(carry)

  return l3.next
};