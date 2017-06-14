import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import Message from '../../components/Message'
import { connect } from 'react-redux'

import './Messages.scss'

class Messages extends React.Component {

  constructor (props) {
    super(props)
  }

  getMessages () {
    let messages = [],
      preventUser = null

    this.props.messages.forEach((message, index) => {
      messages.push(<Message key={index} message={message} avatar={preventUser ? false : true} />)

      if (preventUser !== message.from) preventUser = message.from
    })

    return messages
  }

  render () {
    return (
      <div id="messages" className="messages">
        <CSSTransitionGroup
          transitionName="messagesUp"
          transitionEnterTimeout={500}
          transitionLeave={false}>
          {this.getMessages()}
        </CSSTransitionGroup>
      </div>
    )
  }
}

function mapStateProps (state) {
  return {
    messages: state.messages
  }
}

export default connect(mapStateProps)(Messages)
