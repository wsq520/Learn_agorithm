function countConsistentStrings(allowed, words) {
  const set = new Set(allowed)
  let res = 0
  for(const word of words) {
      for(const char of word) {
          if(!set.has(char)) {
              continue
          }
      }
      res++
  }
  return res
};

const arr = [1,1,1,2,2,3]
topKFrequent(arr, 2)