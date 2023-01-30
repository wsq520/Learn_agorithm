// https://leetcode.cn/problems/merge-in-between-linked-lists/description/

// @ts-nocheck
function mergeInBetween(list1: ListNode | null, a: number, b: number, list2: ListNode | null): ListNode | null {
  let startNode: ListNode // 记录索引为 a 的结点的前一个结点
  let endNode: ListNode // 记录索引为 b 的结点的后一个结点
  let tempNode: ListNode | null = list1 // 遍历 list1
  let list2_end: ListNode = list2 // 找到 list2 最后一个结点

  for (let i = 0; i <= b; i++) {
    if (i + 1 === a) {
      startNode = tempNode
    }
    if (i === b) {
      endNode = tempNode.next
    }
    tempNode = tempNode.next
  }

  while (list2_end.next) {
    list2_end = list2_end.next
  }

  startNode.next = list2
  list2_end.next = endNode

  return list1
};

export { }