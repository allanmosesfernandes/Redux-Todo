import { createSlice } from "@reduxjs/toolkit/dist/redux-toolkit.cjs.production.min";

export const todoSlice = createSlice({
    name: 'todos',
    initialState: [
        { id: 1, title: 'todo1', completed: false },
        { id: 2, title: 'todo2', completed: false },
        { id: 3, title: 'todo3', completed: true  },
        { id: 4, title: 'todo4', completed: false },
        { id: 5, title: 'todo5', completed: false },
    ],
    reducers: {
        addTodo: ( state, action ) => {
            const todo = {
                id: new Date(),
                title: action.payload.title,
                completed: false,
            };
            state.push(todo);
        },

        toggleToDo: (state, action ) => {
            const index = state.findIndex((todo) => todo.id === action.payload.id);
            state[index].completed = action.payload.completed;
        }, 

        deleteToDo : (state, action) => {
            return state.filter((todo) => todo.id !== action.payload.id );
        }
    }
})

/* 
When we create a reducer object like this,
the createSlice function creates actions based on 
the reducer names 
*/

export const { addTodo, toggleToDo, deleteToDo } = todoSlice.actions;

export default todoSlice.reducer;
