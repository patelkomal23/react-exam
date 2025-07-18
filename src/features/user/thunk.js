import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../axios/axiosApi";

const API_KEY = 'e562eb7c';
var currentPage = 1;
var currentQuery = 'Avenger';

export const fetchUser = createAsyncThunk('user/fetchUser', async (query,{rejectWithValue})=>{
    try {
        let res = await axiosInstance.get('',{
      params: {
        apikey: API_KEY,
        s: query || currentQuery,
        page: currentPage,
      },
    });
    console.log(res.data.Search)
        return res.data.Search
        
    } catch (error) {
        return rejectWithValue(error.message)
    }
})


