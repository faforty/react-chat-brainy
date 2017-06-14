import * as types from './actionTypes'

export function addMessage (message) {
  return { type: types.ADD_MESSAGE, message }
}

export function setStep () {
  return { type: types.SET_STEP }
}
