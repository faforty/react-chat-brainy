import { combineReducers } from 'redux'

const initialState = {
  user: null,
  messages: []
}

export function user (state = initialState.user) {
  return state
}

export function messages (state = initialState.messages, action) {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return [
        ...state,
        action.message
      ]
      break;
    default:

  }

  return state
}

export default combineReducers({
  user: user,
  messages: messages
})
