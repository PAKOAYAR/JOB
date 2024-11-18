import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";
import { jobslice } from "./jobslice";



const store=configureStore({
    reducer:{
        auth:authSlice.reducer,
        job:jobslice.reducer,
        
    }
})
export default store;