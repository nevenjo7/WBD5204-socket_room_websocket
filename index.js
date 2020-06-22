const path = require('path')
const express = require('express')
const http = require('http')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)


app.use(express.static(path.join(__dirname, 'public')))

io.on('connection', socket => {
    console.log("New WS connection ...")
    socket.on('message', msg => {
        socket.send(msg)
    })
})
server.listen(3000, () => {
    console.log("Server started on port 3000")
});

