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
    }
})

/* 
When we create a reducer object like this,
the createSlice function creates actions based on 
the reducer names 
*/

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
