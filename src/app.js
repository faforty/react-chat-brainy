// import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
// import { Provider } from 'react-redux'
// import configureStore from './store/configureStore'
import App from './components/App/App'

// const store = configureStore()

render(<App />,
  document.getElementById('app')
)