import { createStore } from 'redux'
import { toggleToDo, todoApp, addToDo, setVisibilityFilter } from './reducers'
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VISIBILITY_FILTERS
} from './ActionTypes'
import { store } from './index'

// console.log(store.getState())

// const unsubscribe = store.subscribe(() => console.log(store.getState()))

// store.dispatch(addToDo('Learn about actions'))
// store.dispatch(addToDo('Learn about reducers'))
// store.dispatch(addToDo('Learn about store'))
// store.dispatch(toggleToDo(0))
// store.dispatch(toggleToDo(1))
// store.dispatch(setVisibilityFilter(VISIBILITY_FILTERS.SHOW_COMPLETED))

// unsubscribe()
