import { configureStore } from "@reduxjs/toolkit";
import isLoadingReducer from "./Loading/LoadingSlice";
import savedRecipeReducer from "./SavedRecipe/SavedRecipeSlice";

export const store = configureStore({
    reducer: {
        isLoading: isLoadingReducer,
        savedRecipe: savedRecipeReducer
    }
});