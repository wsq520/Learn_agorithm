// https://leetcode.cn/problems/greatest-english-letter-in-upper-and-lower-case/description/

function greatestLetter(s: string): string {
  const hash: string[][] = Array.from(new Array(26), () => new Array(2).fill(''))

   for(let i = 0; i < s.length; i++) {
       const codeValue = s[i].charCodeAt(0)
       // 判断是不是大写字母
       if(codeValue >= 65 && codeValue <= 96) {
           hash[codeValue - 65][1] = s[i]
       } else {
           hash[codeValue - 97][0] = s[i]
       }
   }

   for(let i = hash.length - 1; i >=0; i--) {
       if(hash[i][0] !== '' && hash[i][1] !== '') {
           return hash[i][1]
       }
   } 

   return ''
};

console.log(greatestLetter("arRAzFif"))

export { }