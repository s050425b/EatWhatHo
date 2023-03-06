import { createSlice } from "@reduxjs/toolkit";

const SavedRecipeSlice = createSlice({
    name: "savedRecipe",
    initialState: ["527097", "674624"],
    reducers:{
        addRecipe: (state, action) => {
            return [...state, action.payload];
        },
        removeRecipe: (state, action) => {
            return state.filter(element => {
                return element !== action.payload;
            })
        }
    }
});

export const {addRecipe, removeRecipe} = SavedRecipeSlice.actions;
export default SavedRecipeSlice.reducer;