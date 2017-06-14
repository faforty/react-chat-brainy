import { combineReducers } from 'redux'

const initialState = {
  user: null,
  messages: []
}

export function user (state = initialState.user) {
  return state
}

export default combineReducers({
  user: user
})
