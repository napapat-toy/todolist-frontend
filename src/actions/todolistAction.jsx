import * as api from '../API/todolistAPI'

export const getTodolist = async () => {
    try {
        const { data } = await api.fetchTodolist()
    } catch (error) {
        console.log(error);
    }

}
