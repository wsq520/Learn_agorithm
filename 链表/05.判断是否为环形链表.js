// https://leetcode.cn/problems/linked-list-cycle/submissions/

var hasCycle = function (head) {
  const map = new Map()
  while (head) {
    // 遍历链表 如果某个节点出现两次 说明存在环
    if (map.has(head)) return true
    map.set(head, true)
    head = head.next
  }
  return false
};