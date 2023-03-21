/* 
  max: 数组长度
*/

function hashFunc(key: string, max: number): number {
  let hashCode = 0
  const length = key.length

  for(let i = 0; i < length; i++) {
    hashCode = hashCode * 31 + key.charCodeAt(i)
  }

  const index = hashCode % max

  return index
}

export default hashFunc