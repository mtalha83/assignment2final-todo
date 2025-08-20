import { useState, type ChangeEvent, type FormEvent } from 'react'
import './Todo.css'

interface TodoType {
  id: string
  title: string
  isCompleted: boolean
}

const Todo = () => {
  const [todos, setTodos] = useState<TodoType[]>([
    { id: '1', title: 'Go to gym', isCompleted: false },
    { id: '2', title: 'To finish React Assignments', isCompleted: false },
    { id: '3', title: 'Purchase groceries', isCompleted: false }
  ])

  const [newTask, setNewTask] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState<string | null>(null)

  const handleNewTask = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!newTask.trim()) {
      alert('Input cannot be empty')
      return
    }

    if (isEditing && editId) {
      setTodos(prev =>
        prev.map(todo =>
          todo.id === editId ? { ...todo, title: newTask } : todo
        )
      )
      setIsEditing(false)
      setEditId(null)
    } else {
      const newTodo: TodoType = {
        id: Date.now().toString(),
        title: newTask,
        isCompleted: false
      }
      setTodos(prev => [newTodo, ...prev])
    }

    setNewTask('')
  }

  const handleDeleteTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  const handleEditTodo = (id: string) => {
    const todoToEdit = todos.find(todo => todo.id === id)
    if (todoToEdit) {
      setNewTask(todoToEdit.title)
      setIsEditing(true)
      setEditId(id)
    }
  }

  const toggleComplete = (id: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    )
  }

  return (
    <div className="todo-container">
      <form className="todo-form" onSubmit={handleSubmit}>
        <label htmlFor="todo">What you want to do?</label>
        <input
          type="text"
          value={newTask}
          onChange={handleNewTask}
          id="todo"
          placeholder="Type your todo"
        />
        <button type="submit">{isEditing ? 'Update Todo' : 'Add Todo'}</button>
      </form>

      {todos.length > 0 ? (
        <ul className="todo-list">
          {todos.map(todo => (
            <li key={todo.id} className={todo.isCompleted ? 'completed' : ''}>
              <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() => toggleComplete(todo.id)}
              />
              {todo.title}
              <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
              <button onClick={() => handleEditTodo(todo.id)}>Edit</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>You don't have any todo</p>
      )}
    </div>
  )
}

export default Todo
