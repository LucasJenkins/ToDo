import React from 'react'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VISIBILITY_FILTERS
} from './ActionTypes'
import './store'
import { todoApp } from './reducers'

export const store = createStore(todoApp, window.STATE_FROM_SERVER)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
