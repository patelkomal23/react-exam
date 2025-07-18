import { createSlice } from "@reduxjs/toolkit";
import {  fetchUser } from "./thunk";

const initialState = {
    user : [],
    loading : false,
    error : null,
}

const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {},
    extraReducers : (builder)=>{

        //fetch
        builder.addCase(fetchUser.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
        builder.addCase(fetchUser.fulfilled,(state,action)=>{
            state.loading = false;
            let newData = [];
            let data = action.payload;
            for(let key in data){
                newData.push({...data[key], id : key})
            }
            state.user = newData;
        })
        builder.addCase(fetchUser.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message
        })


    }
})

export default userSlice.reducer;