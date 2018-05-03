import * as crel from 'crel';
import { createStore } from 'redux';


function render(state) {
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
    button.addEventListener('click', function (event) {
      state.input += val
    })

    return button
  }
  function renderClearButton() {
    const button = crel('button', 'C')
    button.id = 'clear'
    button.addEventListener('click', function (event) {
      state.input = ''
    })
    return button
  }
  function renderEvalButton() {
    const button = crel('button', '=')
    button.id = 'result'
    button.addEventListener('click', function (event) {
      const result = eval(state.input)
      state.input = result
    })
    return button
  }
  function renderOperations(val) {
    const button = crel('button', val);
    button.addEventListener('click', () => {
      dispatch({ type: 'opr', payload: val });
    });
    return button;
  }

  function renderButtons(numbers) {
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
module.exports = render