import React from 'react'
import { render } from 'react-dom'
import App from './App'

import { applyMiddleware, compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import CombineReducers from './store/CombineReducers'

import thunk from 'redux-thunk'

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = compose(applyMiddleware(thunk))(createStore)(
  CombineReducers,
  devTools
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
