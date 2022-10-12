// https://leetcode.cn/problems/merge-two-sorted-lists/

var mergeTwoLists = function(list1, list2) {
  if(!list1 && !list2) return null
  const arr = []
  while(list1) {
      arr.push(list1.val)
      list1 = list1.next
  }
   while(list2) {
      arr.push(list2.val)
      list2 = list2.next
  }
  // 将数组排序
  arr.sort((a, b) => a - b)
  let head = new ListNode(arr[0])
  let temp = head
  let i = 1
  while(i < arr.length) {
      temp.next = new ListNode(arr[i++])
      // 注意：连接完新节点 那么指针应该指向新节点
      temp = temp.next
  }
  return head
};