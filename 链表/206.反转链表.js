// https://leetcode.cn/problems/reverse-linked-list/description/

var reverseList = function (head) {
  let p1 = head, p2 = null
  while (p1) {
    // temp 保存的是原来链表中p1指向的节点的下一个节点
    const temp = p1.next
    // p2实际上是反转之后 当前p1指向的节点的上一个节点
    p1.next = p2
    // p1 p2均右移
    p2 = p1
    p1 = temp
  }
  return p2
};