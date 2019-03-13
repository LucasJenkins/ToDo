import React from 'react'
import { combineReducers } from 'redux'
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

const { SHOW_ALL } = VISIBILITY_FILTERS

// action creators
export const addToDo = text => {
  return { type: 'ADD_TODO', text }
}
export const removeToDo = text => {
  return { type: 'REMOVE_TODO', text }
}
export const toggleToDo = index => {
  return { type: 'TOGGLE_TODO', index }
}
export const setVisibilityFilter = filter => {
  return { type: 'SET_VISIBILITY_FILTER', filter }
}

// initial State
const initialState = {
  visibilityFilter: VISIBILITY_FILTERS.SHOW_ALL,
  todos: []
}

// Reducer
export function visibilityFilter (state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export function todos (state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
    default:
      return state
  }
}

export const todoApp = combineReducers({
  visibilityFilter,
  todos
})
export default todoApp
