import { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './styles/style.css'

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Belajar React' },
    { id: 2, text: 'Mengerjakan tugas sekolah' }
  ])

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text
    }
    setTodos([...todos, newTodo])
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="app">
      <div className="todo-container">
        <h1 className="title">TO-DO LIST</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      </div>
    </div>
  )
}

export default App
