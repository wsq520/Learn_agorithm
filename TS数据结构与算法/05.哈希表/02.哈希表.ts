class HashTable<T = any> {
  // [string, T]定义一个元组类型
  private storage: [string, T][][] = []
  // 定义数组长度
  private length: number = 7
  // 记录数组已存储几个元素
  private count: number = 0
  // 哈希函数
  private hashFunc(key: string, max: number) {
    let hashCode = 0
    const length = key.length

    for (let i = 0; i < length; i++) {
      hashCode = hashCode * 31 + key.charCodeAt(i)
    }

    const index = hashCode % max

    return index
  }

  // 插入或修改
  put(key: string, value: T) {
    const index = this.hashFunc(key, this.length)

    let bucket = this.storage[index]

    if (!bucket) {
      bucket = []
      this.storage[index] = bucket
    }

    let isUpdate = false // 判断应该是更新还是插入 
    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i]
      const tupleKey = tuple[0]
      if (tupleKey === key) {
        tuple[1] = value
        isUpdate = true
      }
    }

    if (!isUpdate) {
      bucket.push([key, value])
      this.count++
    }
  }

  get(key: string): T | undefined {
    const index = this.hashFunc(key, this.length)

    const bucket = this.storage[index]
    if (!bucket) return undefined

    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i]
      const tupleKey = tuple[0]
      const tupleValue = tuple[1]
      if (tupleKey === key) return tupleValue
    }

    return undefined
  }

  delete(key: string): T | undefined {
    const index = this.hashFunc(key, this.length)

    const bucket = this.storage[index]
    if (!bucket) return undefined

    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i]
      const tupleKey = tuple[0]
      if (tupleKey === key) {
        bucket.splice(i, 1)
        this.count--
        return tuple[1]
      }
    }

    return undefined

  }
}

const hashTable = new HashTable<number>()

hashTable.put("aaa", 100)
hashTable.put("bbb", 200)
hashTable.put("ccc", 300)

console.log(hashTable.get("aaa"))
console.log(hashTable.delete("aaa"))
console.log(hashTable.get("aaa"))

export default hashTable
