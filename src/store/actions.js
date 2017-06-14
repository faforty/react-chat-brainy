import * as types from './actionTypes'

export function addMessage (message) {
  return { type: types.ADD_MESSAGE, message }
}
