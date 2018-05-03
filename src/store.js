import { createStore } from 'redux'

store = createStore(reducer, initialState)

store.subscribe(() => {
  console.log("new state:", store.getState())
})

store.dispatch({ type: "logout" })