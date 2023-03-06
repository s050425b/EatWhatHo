import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectSavedRecipe } from "../../Global_state/SavedRecipe/SavedRecipeSelector";
import { SavedRecipeList } from "../../Components/SavedRecipeList/SavedRecipeList";
import "./SavedMealPage.css";
import Spoonacular from "../../Utils/Spoonacular";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loadTrue, loadFalse } from "../../Global_state/Loading/LoadingSlice";

export function SavedMealPage() {
    const dispatch = useDispatch();
    const savedRecipeArr = useSelector(selectSavedRecipe);
    const [recipeInfoArr, setRecipeInfoArr] = useState([]);

    useEffect(() => {
        dispatch(loadTrue());
        async function searchMeal() {
            setRecipeInfoArr(await Spoonacular.searchMealDetailByIDArr(["122987", "527097"]));
            dispatch(loadFalse());
        }
        searchMeal();
    }, []);

    return (
        <div className="SavedMealPage pageContainer">
            <SavedRecipeList savedList={recipeInfoArr} />
        </div>
    );
}