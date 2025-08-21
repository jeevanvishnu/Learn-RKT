import { configureStore } from "@reduxjs/toolkit";
import conunterReducer from "../feature/counter/CounterSlice";

export const store = configureStore({
    reducer:{
        counter:conunterReducer
    }
})