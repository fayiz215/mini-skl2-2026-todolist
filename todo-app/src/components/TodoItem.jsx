function TodoItem({ todo, deleteTodo }) {
  return (
    <div className="todo-item">
      <span className="todo-text">{todo.text}</span>
      <button
        className="todo-delete-btn"
        onClick={() => deleteTodo(todo.id)}
      >
        X
      </button>
    </div>
  )
}

export default TodoItem
