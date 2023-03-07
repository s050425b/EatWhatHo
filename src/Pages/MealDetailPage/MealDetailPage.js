import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Spoonacular from "../../Utils/Spoonacular";
import { MealDetail } from "../../Components/MealDetail/MealDetail";
import "./MealDetailPage.css";
import { useDispatch, useSelector } from "react-redux";
import { loadFalse, loadTrue } from "../../Global_state/Loading/LoadingSlice";
import { addRecipe, removeRecipe } from "../../Global_state/SavedRecipe/SavedRecipeSlice";
import { isRecipeSaved } from "../../Global_state/SavedRecipe/SavedRecipeSelector";

export function MealDetailPage() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [mealObj, setMealObj] = useState();
    const isSaved = useSelector(isRecipeSaved(id));

    useEffect( () => {
        async function fetchMealObj() {
            dispatch(loadTrue());
            let returnObj =  await Spoonacular.searchMealDetail(id);
            setMealObj(returnObj);
            dispatch(loadFalse());
        }
        fetchMealObj();
    }, []);

    if (!id) {
        return (
        <div className="MealDetailPage">No search result</div>
        );
    } else if (!mealObj) {
        return (
            <div className="MealDetailPage">Loading</div>
        );
    }

    function onClickSave() {
        if (isSaved) {
            dispatch(removeRecipe(mealObj.id));
        } else {
            dispatch(addRecipe(mealObj.id));
        }
        
    }

    return (
        <div className="MealDetailPage">
            <MealDetail 
                id={id} 
                name={mealObj.title} 
                duration={mealObj.cookingMinutes} 
                image={mealObj.image} 
                source={mealObj.sourceUrl} 
                healthScore={mealObj.healthScore} 
                ingredArr={mealObj.ingredients} 
                dishTypes={mealObj.dishTypes} 
                onClickSave={onClickSave}
                isSaved={isSaved}
                />
        </div>
    );
}