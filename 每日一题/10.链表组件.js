// https://leetcode.cn/problems/linked-list-components/

var numComponents = function (head, nums) {
  const numsSet = new Set(nums)
  let res = 0
  while (head) {
    // 集合中包含当前节点并且不包含下一节点 res+1
    // 集合包含当前节点但是下一个节点不存在 那么当前节点自身构成一个组件 res+1
    if (numsSet.has(head.val) && (!head.next || !numsSet.has(head.next.val))) {
      res++
    }
    head = head.next
  }
  return res
};