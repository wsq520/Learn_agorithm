const http = require('http')
const cpuCoreLength = require('os').cpus().length
const cluster = require('cluster')

if(cluster.isMaster) {
  for(let i = 0; i < cpuCoreLength; i++) {
    console.log('开启子进程', i)
    cluster.fork()
  }
} else {
  console.log('111')
  const server = http.createServer((req, res) => {
    res.writeHead(200)
    res.end('hello')
  })
  server.listen(3000, () => {
    console.log('服务在3000端口开启~')
  })
}