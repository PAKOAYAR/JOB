import { createSlice } from "@reduxjs/toolkit";
const jobslice=createSlice({
    name:'job',
    initialState:{
        alljobs:[],
        singleJob:null,
    },
    reducers:{
        setalljobs:(state,action)=>{
            state.alljobs=(action.payload)
        },
        setSingleJob:(state,action)=>{
            state.singleJob=action.payload
    }
    }
})
export const{setalljobs,setSingleJob}=jobslice.actions;
export default jobslice.reducer;
export { jobslice };