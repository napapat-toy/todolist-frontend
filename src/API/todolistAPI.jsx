import axios from 'axios'
const API = axios.create({ baseURL: 'http://localhost:8000/api/todolist' })

export const fetchTodolist = () => API.get(`/`)
export const createTodolist = (todolist) => API.post(`/`, todolist)
export const updateTodolist = (id, body) => API.put(`/${id}`, body)
export const deleteTodolist = (id) => API.delete(`/${id}`)

