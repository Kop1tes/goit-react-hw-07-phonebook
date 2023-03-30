import { createSlice } from "@reduxjs/toolkit";

const inititalFilterState = "";

export const filterSlice = createSlice({
    name: "filter",
    initialState: inititalFilterState,
    reducers: {
        getVisibleContact: (state, { payload }) => {
            return {
                ...state,
                filterValue: payload,
            };
        },
    },
});

export const { getVisibleContact } = filterSlice.actions;
export const filterReduce = filterSlice.reducer;