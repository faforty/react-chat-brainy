import { combineReducers } from 'redux'

const initialState = {
  user: null,
  messages: [],
  steps: 1,
  action: null
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

export function steps (state = initialState.steps, action) {
  switch (action.type) {
    case 'SET_STEP':
    console.log(state);
      return state + 1
      break;
    default:
      return state
  }
}

export function action (state = initialState.action, action) {
  switch (action.type) {
    case 'SET_ACTION':
      return action.actionType
      break;
    default:
      return state
  }
}

export default combineReducers({
  user: user,
  messages: messages,
  step: steps,
  action: action
})
