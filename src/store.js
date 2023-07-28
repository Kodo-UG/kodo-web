import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Defaults to localStorage for web
import userReducer from "./toolkit/userReducer";
import formReducer from "./toolkit/formReducer";
import jobReducer from "./toolkit/jobReducer";

// Combine reducers
const rootReducer = combineReducers({
	user: userReducer,
	formData: formReducer,
	jobData:jobReducer
});

// Configure persistence options
const persistConfig = {
	key: "root",
	storage,
	// Add any additional configuration options here
};

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store
const store = configureStore({
	reducer: persistedReducer,
});

// Create persistor
const persistor = persistStore(store);

export { store, persistor };
