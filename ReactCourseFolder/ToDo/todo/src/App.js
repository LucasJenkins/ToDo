import React from 'react'
import Footer from './components/Footer'
import AddTodo from './Containers/AddTodo'
import VisibleTodoList from './Containers/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
