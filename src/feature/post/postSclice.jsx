import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id:1,title:"Learning Redux Toolkit",content:"I am very happy to learning redux"
       
    },
    {
        id:2,title:"Slience...." , content:"I am a slient boy"
    }
]

const postSlice = createSlice({
    name:"posts",
    initialState,
    reducers:{}
})

export default postSlice.reducer