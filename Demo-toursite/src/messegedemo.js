import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card'
import './message.css'

// connct to the server port..
const socket = io.connect('http://localhost:4000')

//class la use pannura state mathiri function la pannurom athunala state ,setSteat nu value asseing 
function Messagedemo() {
  const [state, setSteat] = useState({ message: '', name: '',message1:'',name1:'' })
  const [chat, setChat] = useState([])
  // const [chat1 ,setChat1]=useState([])
  

  useEffect(() => {
    socket.on('message', ({ name, message,name1,message1 }) => {
      setChat([...chat, { name, message ,name1,message1}])
    })
    // socket.on('message',({name1,message1})=>{
    //   setChat1([...chat1,{name1,message1}])
    // })
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

  //
  const onMessageSubmit1 = e => {
    e.preventDefault()
    const { name1, message1 } = state
    socket.emit('message', { name1, message1 })
    setSteat({ message1: '', name1 })
  }

  const renderChat = () => {
    
    return chat.map(({ name, message ,name1,message1 }, index) => (
      // console.log(name1)
      <div key={index}>
          <div className="name-field">
          
        </div>
        <h3>
          {name}  <span>{message}</span>
           {name1} <span>{message1}</span>  
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
      <form onSubmit={onMessageSubmit1}>
        <h1>Messanger</h1>
        <div className="name-field">
          <TextField
            name="name1"
            onChange={e => onTextChange(e)}
            value={state.name1}
            label="Name"
          />
        </div>
        <div>
          <TextField
            name="message1"
            onChange={e => onTextChange(e)}
            value={state.message1}
            id="outlined-multiline-static"
            variant="outlined"
            label="Message"
          />
        </div>
        <button>Send Message</button>
      </form>
      </Card>

      <div className="render-chat">
        <h1>Chat Log</h1>
        {renderChat()}
      </div>
    </div>
  )
}

export default Messagedemo;