// store.js
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./toolkit/userReducer";

// Combine reducers
const rootReducer = combineReducers({
	user: userReducer,
});

// Create the Redux store
const store = configureStore({
	reducer: rootReducer,
});

export default store;
