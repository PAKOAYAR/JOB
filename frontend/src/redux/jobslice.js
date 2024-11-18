import { createSlice } from "@reduxjs/toolkit";
const jobslice=createSlice({
    name:'job',
    initialState:{
        alljobs:[]
    },
    reducers:{
        setalljobs:(state,action)=>{
            state.alljobs.push(action.payload)
        }
    }

})
export const{setalljobs}=jobslice.actions;
export default jobslice.reducer;
export { jobslice };