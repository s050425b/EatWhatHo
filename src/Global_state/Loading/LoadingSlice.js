import { createSlice } from "@reduxjs/toolkit";

const LoadingSlice = createSlice({
    name: "isLoading",
    initialState: false,
    reducers: {
        loadTrue: (state, action) => {
            return true;
        },
        loadFalse: (state, action) => {
            return false;
        }
    }
});


export const { loadTrue, loadFalse } = LoadingSlice.actions;
export default LoadingSlice.reducer;

