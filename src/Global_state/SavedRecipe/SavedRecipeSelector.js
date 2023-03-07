export const selectSavedRecipe = state => {
    return state.savedRecipe;
}

export const isRecipeSaved = id => state => {
    return state.savedRecipe.includes(id);
}