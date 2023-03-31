import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filterSlice";
import { userReducer } from "./userSlice";

export const store = configureStore({
    reducer: {
        contacts: userReducer,
        filter: filterReducer,
    },
});