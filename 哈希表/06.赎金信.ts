// https://leetcode.cn/problems/ransom-note/submissions/

function canConstruct(ransomNote: string, magazine: string): boolean {
  const arr:number[] = new Array(26).fill(0)
  const base:number = 'a'.charCodeAt(0)
  let index:number
  for(let i = 0; i < magazine.length; i++) {
      index = magazine.charCodeAt(i) - base
      arr[index]++
  }
  for(let i = 0; i < ransomNote.length; i++) {
      index = ransomNote.charCodeAt(i) - base
      if(arr[index] > 0) {
          arr[index]--
      } else {
          return false
      }
  }
  return true
};