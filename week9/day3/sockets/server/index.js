const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors({ credentials: true, origin: "http://localhost:3000" }))

const server = app.listen(8000, () => {
  console.log('served on port 8000')
})

const io = require('socket.io')(server, { cors: true })

io.on('connection', socket => {
  console.log("socket.id: ", socket.id)
  socket.on('event_from_client', data => {
    console.log('data: ', data)
    // emit message to this socket
    socket.emit("send_data_to_all_other_clients", data)
    // emit message to everyone except for this socket
    socket.broadcast.emit("send_data_to_all_other_clients", data)
    // emit message to everyone connected
    io.emit("send_data_to_all_other_clients", data)
  })

})