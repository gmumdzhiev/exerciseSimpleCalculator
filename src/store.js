import { createStore } from 'redux'

const initialState = {
  input: ''
}

const reducer = (state, action) => {
  if (action.type == 'EVALUATE') {
    return { input: eval(state.input) }
  }
  if (action.type == 'CLEAR') {
    return { input: '' }
  }
  if (action.type == 'BUTTON') {
    return { input: state.input + action.payload }
  }
  return state
}
export default createStore(reducer, initialState)





