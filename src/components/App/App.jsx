import React from 'react'
import { connect } from 'react-redux'
import { IconButton } from 'react-toolbox/lib/button'
import Drawer from 'react-toolbox/lib/drawer'
import { List, ListItem } from 'react-toolbox/lib/list'
import Messages from '../../components/Messages'
import ChatForm from '../../components/ChatForm'

import '../../styles/main.scss'
import './App.scss'

class App extends React.Component {

  state = {
    users: {
      client: {
        email: 'faforty@ya.ru'
      },
      bot: {
        username: 'Нарек'
      }
    },
    messages: [
      {
        from: 1,
        message: 'Привет, меня зовут Нарек, я создан искусственно, но я умею помогать...'
      }, {
        from: 1,
        message: 'Как я могу к вам обращаться?'
      }, {
        from: 0,
        message: 'sdfsdfsdf'
      }
    ],
    drawer: false
  }

  handleDrawerToggle = () => {
    this.setState({
      drawer: !this.state.drawer
    })
  };

  render () {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-header__h1">Chat / briff
            <IconButton className="app-header-menu" icon="menu" onClick={this.handleDrawerToggle} />
            <div className="app-header-counter">{this.props.steps} / 11</div>
          </h1>
        </header>
        <Messages messages={this.state.messages} user={this.state.users} />
        <ChatForm handleMessage={this.onHandleMessage} />
        <Drawer active={this.state.drawer} onOverlayClick={this.handleDrawerToggle}>
          <List selectable ripple>
            <ListItem caption="Главная" leftIcon="home" />
            <ListItem caption="О нас" leftIcon="info" />
          </List>
        </Drawer>
      </div>
    )
  }
}

function mapStateProps (state) {
  return {
    steps: state.step
  }
}

export default connect(mapStateProps)(App)
