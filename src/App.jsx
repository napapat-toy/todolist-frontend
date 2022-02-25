import { useState } from 'react';
import './App.css';
import { deleteTodolist, getTodolist, updateTodolist } from './actions/todolistAction'
import { useEffect } from 'react';
import ShowTodo from './components/ShowTodo';
import { createTodolist } from './actions/todolistAction';

function App() {
  const [todoData, setTodoData] = useState({
    header: '',
    text: ''
  })

  const [allTodo, setAllTodo] = useState([])
  const [editTodo, setEditTodo] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editTodo) {
      updateTodolist(todoData._id, todoData)
      setEditTodo(false)
    } else {
      createTodolist(todoData)
    }
    setTodoData({ header: '', text: '' })
  }

  const handleDelete = (id) => {
    if (editTodo) {
      setEditTodo(false)
      setTodoData({ header: '', text: '' })
    }
    deleteTodolist(id)
  }

  const handleEdit = (todo) => {
    setEditTodo(true)
    setTodoData(todo)
  }

  const handleClear = () => {
    if (editTodo) {
      setEditTodo(false)
    }
    setTodoData({ header: '', text: '' })
  }

  useEffect(() => {
    getTodolist().then(data => setAllTodo(data))
  }, [allTodo])

  return (
    <div className="App">

      <div className="app-container">
        <h1>Todolist App</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <h2>Todo</h2>
            <input type="text" id='todo' required value={todoData.header} onChange={(e) => setTodoData({ ...todoData, header: e.target.value })} />
          </div>
          <div className="input-container">
            <h2>Detail</h2>
            <textarea name="detail" id="detail" value={todoData.text} onChange={(e) => setTodoData({ ...todoData, text: e.target.value })}></textarea>
          </div>
          <div className="btn-group">
            <button type='submit' className='btn'>{editTodo ? 'Edit todo' : 'Add todo'}</button>
            <button type='button' className='btn' onClick={handleClear}>Clear</button>
          </div>
        </form>
      </div>

      <div className="showtodo">
        {allTodo.map((todo) => (
          <ShowTodo key={todo._id} header={todo.header} text={todo.text} handleEdit={() => handleEdit(todo)} handleDelete={() => handleDelete(todo._id)} />
        ))}
      </div>

    </div>
  );
}

export default App;
