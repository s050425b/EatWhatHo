import { configureStore } from "@reduxjs/toolkit";
import isLoadingReducer from "./Loading/LoadingSlice";

export const store = configureStore({
    reducer: {
        isLoading: isLoadingReducer
    }
});