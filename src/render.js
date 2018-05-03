import crel from 'crel'

export default function render(state, dispatch) {
  function renderScreen() {
    return crel('input', {
      value: state.input,
    })
  }
  function renderOutput() {
    return crel('code', state.output)
  }
  function renderButton(val) {
    const button = crel('button', val)
    button.addEventListener('click', function () {
      dispatch({ type: 'BUTTON', payload: val })
    })
    return button
  }
  function renderClearButton() {
    const button = crel('button', 'C')
    button.id = 'clear'
    button.addEventListener('click', function () {
      dispatch({ type: 'CLEAR' })
    })
    return button
  }
  function renderEvalButton() {
    const button = crel('button', '=')
    button.id = 'result'
    button.addEventListener('click', function () {
      dispatch({ type: 'EVALUATE' })
    })
    return button
  }

  function renderButtons() {
    const buttons = crel('div', { class: 'numb' }, ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'].map(val => renderButton(val)))
    const operations = crel('div', { class: 'opr' }, ['+', '-', '*', '/'].map(val => renderButton(val)))
    return crel('div', buttons, operations, renderClearButton(), renderEvalButton())

  }

  return crel('div',
    renderScreen(),
    renderOutput(),
    renderButtons()
  )
}
