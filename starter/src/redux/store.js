import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

/* 
    Store holds all our reducers and manages them for us
*/

export default configureStore({
    reducer: {
        todos: todoReducer,
    },
})