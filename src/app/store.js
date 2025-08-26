import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../feature/post"

export const store = configureStore({
    reducer:{
        posts:postReducer
    }
})