const express = require('express')
const cors = require('cors')
const { socketController } = require('../sockets/controller')


class Server {

  constructor() {
    this.app = express()
    this.port = process.env.PORT
    this.server = require('http').createServer(this.app)
    this.io = require('socket.io')(this.server)

    this.paths = {
      
    }

    // Middlewares
    this.middlewares()

    // App routes
    this.routes()

    // Sockets
    this.sockets()
  }

  middlewares() {

    // CORS
    this.app.use(cors())

    // Public directory
    this.app.use(express.static('public'))

  }

  routes() {
    
    // Object.keys(this.paths).forEach(k => {
    //   this.app.use(this.paths[k], require(`../routes/${k}`))
    // })
    // this.app.use(this.authPath, require('../routes/auth'))
    // this.app.use(this.usuariosPath, require('../routes/user'))

  }

  sockets() {
    this.io.on('connection', socketController)
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log('Server running in port:', this.port)
    })
  }
}




module.exports = Server