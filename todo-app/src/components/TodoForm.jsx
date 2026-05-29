import { useState } from 'react'

function TodoForm({ addTodo }) {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim() === '') return
    addTodo(input)
    setInput('')
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Input Tugas"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="todo-add-btn">Add</button>
    </form>
  )
}

export default TodoForm
