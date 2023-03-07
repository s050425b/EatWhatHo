import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSavedRecipe } from "../../Global_state/SavedRecipe/SavedRecipeSelector";
import { SavedRecipeList } from "../../Components/SavedRecipeList/SavedRecipeList";
import "./SavedMealPage.css";
import Spoonacular from "../../Utils/Spoonacular";
import { loadTrue, loadFalse } from "../../Global_state/Loading/LoadingSlice";
import { useNavigate } from "react-router-dom";

export function SavedMealPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const savedRecipeArr = useSelector(selectSavedRecipe);
    const [recipeInfoArr, setRecipeInfoArr] = useState([]);

    useEffect(() => {
        dispatch(loadTrue());
        async function searchMeal() {
            setRecipeInfoArr(await Spoonacular.searchMealDetailByIDArr(savedRecipeArr));
            dispatch(loadFalse());
        }
        searchMeal();
    }, []);

    function handleRecipeClick(id) {
        navigate("/meal/" + id);
    }

    return (
        <div className="SavedMealPage pageContainer">
            <SavedRecipeList savedList={recipeInfoArr} handleRecipeClick={handleRecipeClick}/>
        </div>
    );
}