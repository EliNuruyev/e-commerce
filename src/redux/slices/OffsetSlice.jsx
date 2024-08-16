import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    itemOffset:0,
}

export const OffsetSlice = createSlice({
    name:"itemOffset",
    initialState,
    reducers:{
        setItemOffset:(state,action)=>{
            state.itemOffset = action.payload
        },
        reset:()=>initialState,
    }


})

export const {setItemOffset,reset} = OffsetSlice.actions

export default OffsetSlice.reducer