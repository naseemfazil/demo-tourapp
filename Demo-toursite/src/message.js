import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card'
import './message.css'

// connct to the server port..
const socket = io.connect('http://localhost:4000')

//class la use pannura state mathiri function la pannurom athunala state ,setSteat nu value asseing 
function Message() {
  const [state, setSteat] = useState({ message: '', name: '',message1:'',name1:'' })
  const [chat, setChat] = useState([])
  

  useEffect(() => {
    socket.on('message', ({ name, message }) => {
      setChat([...chat, { name, message }])
    })
  })


  // text input box la vara value ah chatlog ku anupurathu
  const onTextChange = e => {
    setSteat({ ...state, [e.target.name]: e.target.value })
  }

// form submition(athavathu onclick pannuramathiri onsubmit)
  const onMessageSubmit = e => {
    e.preventDefault()
    const { name, message } = state
    socket.emit('message', { name, message })
    setSteat({ message: '', name })
  }

  const renderChat = () => {
    
    return chat.map(({ name, message }, index) => (
      <div key={index}>
          <div className="name-field">
          <TextField
            name="name"
            onChange={e => onTextChange(e)}
            value={state.name}
            label="Name"
          />
        </div>
        <h3>
          {name}: <span>{message}</span>
          
        </h3>
      </div>
    ))
  }

  return (
    <div className="card">
    <Card>
      <form onSubmit={onMessageSubmit}>
        <h1>Messanger</h1>
        <div className="name-field">
          <TextField
            name="name"
            onChange={e => onTextChange(e)}
            value={state.name}
            label="Name"
          />
        </div>
        <div>
          <TextField
            name="message"
            onChange={e => onTextChange(e)}
            value={state.message}
            id="outlined-multiline-static"
            variant="outlined"
            label="Message"
          />
        </div>
        <button>Send Message</button>
      </form>
      </Card>
      <Card>
      <form onSubmit={onMessageSubmit}>
        <h1>Messanger</h1>
        <div className="name-field">
          <TextField
            name="name"
            onChange={e => onTextChange(e)}
            value={state.name}
            label="Name"
          />
        </div>
        <div>
          <TextField
            name="message"
            onChange={e => onTextChange(e)}
            value={state.message}
            id="outlined-multiline-static"
            variant="outlined"
            label="Message"
          />
        </div>
        <button>Send Message</button>
      </form>
      </Card>

      {/* <div className="render-chat">
        <h1>Chat Log</h1>
        {renderChat()}
      </div> */}
    </div>
  )
}

export default Message;