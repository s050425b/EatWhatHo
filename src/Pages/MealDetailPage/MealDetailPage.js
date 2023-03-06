import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import Spoonacular from "../../Utils/Spoonacular";
import { MealDetail } from "../../Components/MealDetail/MealDetail";
import "./MealDetailPage.css";
import { useDispatch } from "react-redux";
import { loadFalse, loadTrue } from "../../Global_state/Loading/LoadingSlice";
import { addRecipe } from "../../Global_state/SavedRecipe/SavedRecipeSlice";

export function MealDetailPage() {
    const dispatch = useDispatch();
    const { state } = useLocation();
    const [mealObj, setMealObj] = useState();
    
    useEffect( () => {
        async function fetchMealObj() {
            dispatch(loadTrue());
            let returnObj =  await Spoonacular.searchMealDetail(state.id);
            setMealObj(returnObj);
            dispatch(loadFalse());
        }
        fetchMealObj();
    }, []);

    if (!state) {
        return (
        <div className="MealDetailPage">No search result</div>
        );
    } else if (!mealObj) {
        return (
            <div className="MealDetailPage">Loading</div>
        );
    }

    function onClickSave() {
        console.log("save!");
        dispatch(addRecipe(mealObj.id));
    }

    return (
        <div className="MealDetailPage">
            <MealDetail 
                id={state.id} 
                name={mealObj.title} 
                duration={mealObj.cookingMinutes} 
                image={mealObj.image} 
                source={mealObj.sourceUrl} 
                healthScore={mealObj.healthScore} 
                ingredArr={mealObj.ingredients} 
                dishTypes={mealObj.dishTypes} 
                onClickSave={onClickSave}
                />
        </div>
    );
}