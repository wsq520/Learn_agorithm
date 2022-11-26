function isSubsequence(s: string, t: string): boolean {
  let count:number = 0
  let p:number = 0
  for(let i = 0; i < t.length; i++) {
      if(t[i] === s[p]) {
          p++
          count++
          if(p === s.length) {
              break
          }
      }
  }
  return count === s.length
};

export {}