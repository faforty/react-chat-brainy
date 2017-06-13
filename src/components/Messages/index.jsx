import React from 'react'
import Message from '../../components/Message'

import './Messages.scss'

class Messages extends React.Component {

  constructor (props) {
    super(props)

    this.messages = props.messages
  }

  getMessages () {
    let messages = [],
      preventUser = null

    this.messages.forEach((message, index) => {
      messages.push(<Message key={index} message={message} avatar={preventUser ? false : true} />)

      if (preventUser !== message.from) preventUser = message.from
    })

    return messages
  }

  render () {
    return (
      <div id="messages" className="messages">
        {this.getMessages()}
      </div>
    )
  }
}

export default Messages
