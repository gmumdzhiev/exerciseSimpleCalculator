import './style.css'
import render from './render'
import store from './store'

const viewport = document.getElementById('viewport')
const update = () => {
  const view = render(store.getState(), store.dispatch)
  viewport.replaceChild(view, viewport.firstChild)
}
store.subscribe(update)

// store.subscribe(() => {
//   console.log('new state:', store.getState())
// })

update()  