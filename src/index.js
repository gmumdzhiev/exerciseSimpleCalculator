import * as crel from 'crel';
import './style.css';
import render from './render.js';
import { createStore } from 'redux';

const store = createStore(reducer, initialState);
const viewport = document.getElementById('viewport');
const update = () => {
  const view = render(store.getState(), store.dispatch);
  viewport.replaceChild(view, viewport.firstChild);
};
store.subscribe(update);

update();

const initialState = {
  input: '',
  done: '0'
};

const reducer = (state, action) => {
  var output = action.payload;
  if (action.type == 'data') {
    if (state.done == '1') {
      state.input = '';
      state.done = '0';
    }
    state.input = state.input + output;
    return { input: state.input };
  }
  if (action.type == 'opr') {
    state.input = state.input + output;
    state.done = '0';
    return { input: state.input };
  }
  if (action.type == 'eval') {
    state.done = '1';
    return { input: eval(state.input) };
  }
  if (action.type == 'clear') {
    return { input: '' };
  }
  return state;
};
