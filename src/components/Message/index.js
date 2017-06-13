import React from 'react'
import { Avatar } from 'react-toolbox/lib/avatar'

import './Message.scss'

class Message extends React.Component {

  componentDidMount () {
    document.getElementById('messages').scrollTop = 9999
  }

  render () {
    return (
      <div className={'message ' +
      (this.props.message.from === 0 && 'message--me')}>
        <div className="message__avatar">
          {(this.props.avatar && this.props.message.from === 1) &&
          <Avatar><img src="https://placeimg.com/80/80/animals"/></Avatar>}
        </div>
        <div className="message__box">{this.props.message.message}</div>
      </div>
    )
  }
}

export default Message
