import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    todoList: [],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todoList.push(action.payload);
        },
        removeTodo: (state, action) => {
            state.todoList = state.todoList.filter(todo => todo.id !== action.payload.id);
        },
        updateTodo: (state, action) => {
            state.todoList = state.todoList.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo, id: action.payload.id, text: action.payload.text,
                        time: new Date(),
                        completed: action.payload.completed
                    }
                } else {
                    return { ...todo }
                }

            })

        },
        todoCompleted: (state, action) => {
            state.todoList = state.todoList.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo, completed: !todo.completed
                    }
                } else {
                    return { ...todo }
                }
            })
        }

    },
})

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo, updateTodo, todoCompleted } = todoSlice.actions

export default todoSlice.reducer