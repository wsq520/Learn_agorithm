// https://leetcode.cn/problems/remove-duplicates-from-sorted-list/description/?languageTags=javascript

var deleteDuplicates = function (head) {
  if (!head) return head
  let p = head
  while (p && p.next) {
    if (p.val === p.next.val) {
      p.next = p.next.next
    } else {
      // 因为当前元素可能与下下个元素也是相同 所以只有当前元素和下一个元素不相同时才移动指针
      p = p.next
    }
  }
  return head
};

