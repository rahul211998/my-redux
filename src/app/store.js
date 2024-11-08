import { configureStore } from "@reduxjs/toolkit";
// It provides a standard way to configure the Redux store with good defaults, 
// making it easier to set up and manage Redux in an application.
import userReducer from "../slices/userSlice";


const store = configureStore({
    // reducer is a property
    // it also represemt the store
    reducer:{
        usersInfo : userReducer,
    }
})

export default store

