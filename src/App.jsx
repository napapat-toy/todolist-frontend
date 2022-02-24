import { useState } from 'react';
import './App.css';
import { getTodolist } from './actions/todolistAction'
import { useEffect } from 'react';

function App() {
  const [todoData, setTodoData] = useState({
    header: '',
    text: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(todoData);
  }

  useEffect(() => {
    const data = getTodolist()
    console.log(data);
}, [])

return (
  <div className="App">
    <div className="app-container">
      <h1>Todolist App</h1>

      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <h2>Todo</h2>
          <input type="text" id='todo' onChange={(e) => setTodoData({ ...todoData, header: e.target.value })} />
        </div>
        <div className="input-container">
          <h2>Detail</h2>
          <textarea name="detail" id="detail" onChange={(e) => setTodoData({ ...todoData, text: e.target.value })}></textarea>
        </div>
        <button type='submit'>Add todo</button>
      </form>

    </div>
  </div>
);
}

export default App;
