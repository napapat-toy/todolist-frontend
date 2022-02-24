import * as api from '../API/todolistAPI'

export const getTodolist = async () => {
    try {
        const { data } = await api.fetchTodolist()
        return await data
    } catch (error) {
        console.log(error);
    }
}

export const createTodolist = async (body) => {
    try {
        await api.createTodolist(body)
    } catch (error) {
        console.log(error);
    }
}

export const updateTodolist = async (id, body) => {
    await api.updateTodolist(id, body)
}

export const deleteTodolist = async (id) => {
    await api.deleteTodolist(id)
}