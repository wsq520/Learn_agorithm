class Graph<T> {
  // 保存顶点的数组
  private verteces: T[] = []
  // 邻接表：一个顶点与一个数组一一对应
  private adjList: Map<T, T[]> = new Map()


  addVertex(vertex: T) {
    // 将顶点保存到数组中
    this.verteces.push(vertex)
    // 为该顶点创建一个邻接表中的数组
    this.adjList.set(vertex, [])
  }

  addEdge(v1: T, v2: T) {
    this.adjList.get(v1)?.push(v2)
    this.adjList.get(v2)?.push(v1)
  }

  traverse() {
    console.log('Graph: ')
    this.verteces.forEach(vertex => {
      const edges = this.adjList.get(vertex)
      console.log(`${vertex} -> ${edges?.join(' ')}`)
    })
  }
}

const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')
graph.addVertex('G')
graph.addVertex('H')
graph.addVertex('I')

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')

graph.traverse()

export { }