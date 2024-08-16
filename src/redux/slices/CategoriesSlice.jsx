import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



const initialState = {
    categories : [],

}

export const getCategories = createAsyncThunk("getCategories",async ()=>{
    let res = await fetch("https://fakestoreapi.com/products/categories");
    let data = await res.json();
    return data;

})
export const CategoriesSlice = createSlice({
    name:"categories",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
     builder.addCase(getCategories.fulfilled,(state,action)=>{
        state.categories = action.payload
        
     })
    }
})
export default CategoriesSlice.reducer