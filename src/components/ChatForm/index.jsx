import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../store/actions'
import { IconButton } from 'react-toolbox/lib/button'
import { Snackbar } from 'react-toolbox/lib/snackbar'
import Checkbox from 'react-toolbox/lib/checkbox'
import AcceptTerms from './AcceptTerms'

import './ChatForm.scss'

class ChatForm extends React.Component {

  state = {
    snackBar: false,
    value: '',
    acceptTerms: false
  }

  isText () {
    return this.state.value ? true : false
  }

  handleChange = event => {
    let value = event.target.value

    this.setState({
      value: value,
      snackBar: value ? false : true
    })
  }

  handleSend = event => {
    event.preventDefault()

    if (!this.state.value) {
      return this.setState({
        snackBar: true
      })
    }

    if (this.state.value.match(/#action (.*)/i)) {
      this.props.setAction(this.state.value.match(/#action (.*)/i)[1])
    }

    this.props.addMessage({
      message: this.state.value,
      from: 0
    })

    setTimeout(() => {
      this.props.addMessage({
        message: 'sfsdfsdf',
        from: 1
      })
    }, 2000)

    this.setState({
      value: ''
    })

    document.getElementById('chat-form-field').focus()
  }

  handleSnackbarClick = () => {
    this.setState({
      snackBar: false
    })
  }

  handleAcceptTerms = () => {
    let isChecked = !this.state.acceptTerms

    this.setState({
      acceptTerms: isChecked
    })

    if (isChecked) {
      this.props.setAction('finish')
    }
  }

  render () {
    if (this.props.action === 'acceptTerms') {
      return (
        <div className="chat-form chat-form--acceptTerms">
          <AcceptTerms checked={this.state.acceptTerms} handleAcceptTerms={this.handleAcceptTerms} />
        </div>
      )
    }

    return (
      <form className="chat-form" onSubmit={this.handleSend}>
        <input
          type="text"
          id="chat-form-field"
          className="chat-form__field"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Ваше сообщение..."
          autoComplete="off"
          autoFocus />
        <IconButton type="submit" icon="send" className="chat-form__btn" accent={this.isText()} />
        <Snackbar
          action="Понятно"
          active={this.state.snackBar}
          label="Введите текст сообщения"
          timeout={2000}
          onClick={this.handleSnackbarClick}
          onTimeout={this.handleSnackbarTimeout}
          type="cancel"
        />
      </form>
    )
  }
}

function mapDispatchToProps (dispath) {
  return {
    addMessage: (text) => {
      dispath(actions.addMessage(text))
      dispath(actions.setStep(1))
    },
    setAction: (type) => {
      dispath(actions.setAction(type))
    }
  }
}

export default connect(null, mapDispatchToProps)(ChatForm)
