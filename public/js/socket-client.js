
const lblOnline = document.querySelector('#lblOnline')
const lblOffline = document.querySelector('#lblOffline')
const txtMessage = document.querySelector('#form-control')
const sendBtn = document.querySelector('#btnSend')

const socket = io()


socket.on('connect', () => {

  console.log('connected');

  lblOnline.style.display = ''
  lblOffline.style.display = 'none'

})

socket.on('disconnect', () => {

  console.log('disconnected from server');

  lblOnline.style.display = 'none'
  lblOffline.style.display = ''

})

socket.on('message-broadcast', payload => {

  console.log('BC received:', payload);

})


sendBtn.addEventListener('click', ev => {{

  const payload = {
    message: txtMessage.value,
    id: '1234afb',
    date: 'adsfas32'
  }

  socket.emit('send-message', payload, (id) => {
    console.log('From server', id);
  })

}})