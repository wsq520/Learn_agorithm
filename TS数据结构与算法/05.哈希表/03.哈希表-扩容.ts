class HashTable<T = any> {
  private storage: [string, T][][] = []
  private length: number = 7
  private count: number = 0
  private hashFunc(key: string, max: number) {
    let hashCode = 0
    const length = key.length

    for (let i = 0; i < length; i++) {
      hashCode = hashCode * 31 + key.charCodeAt(i)
    }

    const index = hashCode % max

    return index
  }

  private resize(newLength: number) {
    this.length = newLength

    // 将原来的数据填充到新的数组中
    const oldStorage = this.storage
    this.storage = []
    this.count = 0

    oldStorage.forEach(bucket => {
      if (!bucket) return

      for (let i = 0; i < bucket.length; i++) {
        const tuple = bucket[i]
        this.put(tuple[0], tuple[1])
      }
    })
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

      const loadFactor = this.count / this.length
      if (loadFactor > 0.75) {
        this.resize(this.length * 2)
      }
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

        const loadFactor = this.count / this.length
        if (loadFactor < 0.25 && this.length > 7) {
          this.resize(Math.floor(this.length / 2))
        }

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
