import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Auth/AuthSlice/AuthSlice"
import userReducer from "../Userdata/UserSlice"

const store = configureStore({
   reducer:{
    auth:authReducer,
    user:userReducer,
   }
})
export default store;