import { configureStore } from "@reduxjs/toolkit";
import { filterReduce } from "./filterSlice";
import { userReduser } from "./userSlice";

export const store = configureStore({
    reducer: {
        contacts: userReduser,
        filter: filterReduce,
    },
});