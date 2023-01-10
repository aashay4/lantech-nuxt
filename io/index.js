import http from 'http'
import socketIO from 'socket.io'
const dns = require('dns');

var xx;

export default function () {
  this.nuxt.hook('render:before', (renderer) => {
    const server = http.createServer(this.nuxt.renderer.app)
    const io = socketIO(server)

    // overwrite nuxt.server.listen()
    this.nuxt.server.listen = (port, host) => new Promise(resolve => server.listen(port || 3000, host || 'localhost', resolve))
    // close this server on 'close' event
    this.nuxt.hook('close', () => new Promise(server.close))

    io.on('connection', (socket) => {
      socket.on('myip', function (fn) {
        console.log(fn);
      })
    })
  })
}
